import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faSnapchat,
  faYoutube,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Doughnut, PolarArea, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  RadialLinearScale,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import {
  instagramMetrics,
  facebookMetrics,
  snapchatMetrics,
  youtubeMetrics,
  xMetrics,
  linkedinMetrics,
} from "./Metrics";

// Register Chart.js components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  RadialLinearScale,
  BarElement,
  CategoryScale,
  LinearScale
);

const Dashboard = ({ activeSection = "Instagram" }) => {
  const metricsMap = {
    Instagram: instagramMetrics,
    Facebook: facebookMetrics,
    SnapChat: snapchatMetrics,
    YouTube: youtubeMetrics,
    X: xMetrics,
    LinkedIn: linkedinMetrics,
  };
  const iconMap = {
    Instagram: faInstagram,
    Facebook: faFacebook,
    SnapChat: faSnapchat,
    YouTube: faYoutube,
    X: faTwitter,
    LinkedIn: faLinkedin,
  };

  const icon = iconMap[activeSection] || faInstagram;
  const metricsData = metricsMap[activeSection] || metricsMap["Instagram"];

  if (!metricsData) {
    return <h2>No data available for {activeSection}</h2>;
  }

  const labels = metricsData.map((metric) => metric.metric);
  const dataValues = metricsData.map((metric) => {
    if (metric.breakdown) {
      return metric.breakdown.reduce(
        (acc, item) => acc + (item.mentions || 0),
        0
      );
    }
    return parseFloat(metric.value) || 0;
  });

  const doughnutChartData = {
    labels,
    datasets: [
      {
        label: `${activeSection} Metrics`,
        data: dataValues,
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
        hoverBackgroundColor: [
          "#FF6384CC",
          "#36A2EBCC",
          "#FFCE56CC",
          "#4BC0C0CC",
          "#9966FFCC",
          "#FF9F40CC",
        ],
      },
    ],
  };

  const barChartData = {
    labels,
    datasets: [
      {
        label: `${activeSection} Metrics`,
        data: dataValues,
        backgroundColor: "#36A2EB",
      },
    ],
  };

  const doughnutChartOptions = {
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: `${activeSection} Metrics Breakdown`,
      },
    },
    maintainAspectRatio: false,
  };

  const barChartOptions = {
    indexAxis: "y",
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Metric Values",
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
    },
    maintainAspectRatio: false,
  };

  const polarChartLabels = Object.keys(metricsMap);
  const polarChartValues = polarChartLabels.map((section) => {
    const sectionMetrics = metricsMap[section];
    if (sectionMetrics && sectionMetrics[0]?.value) {
      return parseFloat(sectionMetrics[0].value) || 0;
    }
    return 0;
  });

  const polarChartData = {
    labels: polarChartLabels,
    datasets: [
      {
        data: polarChartValues,
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
      },
    ],
  };

  const polarChartOptions = {
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: "Metrics Comparison Across Sections",
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="w-full my-8 px-4 ">
      <h2 className="text-center text-3xl font-semibold text-green-600 mb-8 flex items-center justify-center space-x-4">
        {/* Active Section Icon */}
        <FontAwesomeIcon icon={icon} className="text-4xl" />
        <span>{activeSection} Dashboard</span>
      </h2>

      <div className="flex flex-col gap-8 justify-center items-center h-full">
        {/* Doughnut and Bar Charts stacked vertically */}
        <div className="w-full p-6 bg-white rounded-lg shadow-xl mb-8">
          <div className="w-full h-[250px] mb-6">
            <Doughnut data={doughnutChartData} options={doughnutChartOptions} />
          </div>
          <div className="w-full h-[250px]">
            <Bar data={barChartData} options={barChartOptions} />
          </div>
        </div>

        {/* Polar Chart */}
        <div className="w-full p-6 bg-white rounded-lg shadow-xl mb-8">
          <h3 className="text-center text-2xl font-bold text-gray-800 mb-6">
            {activeSection} - Polar Chart Overview
          </h3>
          <div className="w-full h-[350px] mb-6">
            <PolarArea data={polarChartData} options={polarChartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
