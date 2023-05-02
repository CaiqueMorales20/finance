// Imported Components
import {PageContainer} from '../../components/PageContainer';
import {Pie} from './components/Pie';
import {Caption} from './components/Caption';

// Styled Components
import {CaptionContainer, GraphicsS, GraphicsText} from './style';

// Data
import {GraphicsData} from './data';

// Functional Component
const Graphics = () => {
  // Rendering
  return (
    <PageContainer>
      <GraphicsS>
        <GraphicsText>Gráfico de gastos</GraphicsText>
        <Pie />
        <CaptionContainer>
          {GraphicsData.map((item, index) => {
            // Rendering
            return <Caption text={item.x} color={item.color} />;
          })}
        </CaptionContainer>
      </GraphicsS>
    </PageContainer>
  );
};

// Export
export default Graphics;
