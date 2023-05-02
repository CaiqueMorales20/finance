// Imported Components
import {PageContainer} from '../../components/PageContainer';

// Styled Components
import {GraphicsS, GraphicsText} from './style';

// Functional Component
const Graphics = () => {
  // Rendering
  return (
    <PageContainer>
      <GraphicsS>
        <GraphicsText>Gráfico de gastos</GraphicsText>
      </GraphicsS>
    </PageContainer>
  );
};

// Export
export default Graphics;
