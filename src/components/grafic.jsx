import React from 'react';
import { View, Text } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const data = {
  labels: ['Harina', 'Arroz', 'Pasta', 'Mantequilla', 'Queso'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99],
    },
  ],
};

const chartConfig = {
  backgroundGradientFrom: '#fff',
  backgroundGradientTo: '#eee',
  color: (opacity = 1) => `rgba(22, 120, 22, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.8,
};

const Chart = () => {
  return (
    <View>
      <BarChart
        style={{
          borderRadius: 16,
        }}
        data={data}
        width={screenWidth}
        height={270}
        yAxisLabel="$ "
        chartConfig={chartConfig}
        verticalLabelRotation={0}
      />
    </View>
  );
};

export default Chart;
