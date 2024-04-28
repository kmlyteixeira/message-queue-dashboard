import { MainProps } from "@/app/page";
import { Space } from "antd";
import { Chart, registerables } from 'chart.js';
import { Line, Pie } from "react-chartjs-2";

Chart.register(...registerables);

const getLastDays = () => {
  const today = new Date();
  const lastDays = [];
  for (let i = 9; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    lastDays.push(date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
  }
  return lastDays;
};

const lastDays = getLastDays();

const optionsLineChart = {
  plugins: {
    legend: {
      display: true
    },
    title: {
      display: true,
      text: 'Messages Received in the last 10 days',
      font: {
        size: 14
      },
    }
  },
  elements: {
    line: {
      tension: 0,
      borderWidth: 2,
      borderColor: 'rgba(75,192,192,1)',
    },
    point: {
      radius: 5,
      hitRadius: 5,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 5,
      }
    }
  }
};

const optionsPieChart = {
  plugins: {
    legend: {
      display: true
    },
    title: {
      display: true,
      text: 'Messages State',
      font: {
        size: 14
      }
    }
  }
};

const MessageChart = ({ data }: MainProps) => {

  const activeMessages = data?.filter((message) => message.state === 'Active').length;
  const deferredMessages = data?.filter((message) => message.state === 'Deferred').length;

  const messageByDate = new Map<string, number>();
  for (const message of data || []) {
    const date = new Date(message.enqueuedAt);
    const key = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    const count = messageByDate.get(key) || 0;
    messageByDate.set(key, count + 1);
  }

  const quantity: number[] = [];
  for (const day of lastDays) {
    if (messageByDate.has(day)) {
      quantity.push(messageByDate.get(day)!);
    } else {
        quantity.push(0);
    }
  }

  const dataLineChart = {
    labels: lastDays,
    datasets: [
      {
        label: 'Received',
        data: quantity,
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)'
      }
    ]
  };

  const dataPieChart = {
    labels: ['Active', 'Deferred'],
    datasets: [
      {
        data: [activeMessages, deferredMessages],
        backgroundColor: [
          'rgba(75,192,192, 0.5)',
          'rgba(255, 102, 135, 0.5)'
        ],
        borderColor: [
          'rgba(75,192,192, 1)',
          'rgba(255, 102, 135, 1)'
        ],
      }
    ]
  }

  return (
    <Space style={{
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',

    }}>
      <Pie
        data={dataPieChart}
        options={optionsPieChart}
        width={375} height={375}
        style={{ display: 'block', boxSizing: 'border-box', height: '300px', width: '300px' }}>
      </Pie>
      <Line
        data={dataLineChart}
        options={optionsLineChart}
        width={1000} height={500}
        style={{ display: 'block', boxSizing: 'border-box', height: '300px', width: '600px' }}>
      </Line>
    </Space>
  );
}

export default MessageChart;