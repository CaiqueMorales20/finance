// Imported Components
import {PageContainer} from '../../components/PageContainer';
import {Pie} from './components/Pie';

// Styled Components
import {GraphicsS, GraphicsText, Mn} from './style';

// Data
import {GraphicsData, GraphicsData2} from './data';

// Functional Component
const Graphics = () => {
  // Rendering
  return (
    <PageContainer>
      <GraphicsS>
        <GraphicsText>Gráfico de gastos</GraphicsText>
        <Pie data={GraphicsData2} />
        <Mn />
        <Pie data={GraphicsData} />
      </GraphicsS>
    </PageContainer>
  );
};

// Export
export default Graphics;
