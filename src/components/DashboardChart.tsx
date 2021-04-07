import { dashboardOptions } from '../config/apexCharts'
import { Props } from 'react-apexcharts'
import dynamic from 'next/dynamic'
import { Box, Text } from '@chakra-ui/react'

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
})

interface DashboardChartProps extends Props {
  title: string
}

export function DashboardChart({ title, series }: DashboardChartProps) {
  return (
    <Box p={['6', '8']} bg="gray.800" borderRadius={8} pb="4">
      <Text fontSize="lg" mb="4">
        {title}
      </Text>
      <Chart
        options={dashboardOptions}
        series={series}
        type="area"
        height={160}
      />
    </Box>
  )
}
