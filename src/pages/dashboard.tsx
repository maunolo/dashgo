import { Flex, SimpleGrid, Box, Text } from '@chakra-ui/react'
import { DashboardChart } from '../components/DashboardChart'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'

export default function Dashboard() {
  const series = [{ name: 'series1', data: [31, 120, 10, 28, 51, 18, 109] }]

  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          <DashboardChart title="Inscritos da semana" series={series} />
          <DashboardChart title="Taxa de abertura" series={series} />
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}
