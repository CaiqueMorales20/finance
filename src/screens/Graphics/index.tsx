// Imported Components
import {PageContainer} from '../../components/PageContainer';
import {VictoryPie, VictoryTooltip} from 'victory-native';

// Styled Components
import {GraphicsS, GraphicsText} from './style';

// Functional Component
const Graphics = () => {
  // Rendering
  return (
    <PageContainer>
      <GraphicsS>
        <GraphicsText>Gráfico de gastos</GraphicsText>
        <VictoryPie
          width={300}
          colorScale={['blue', 'yellow', 'red']}
          data={[
            {x: 'Cats', y: 35},
            {x: 'Dogs', y: 40},
            {x: 'Birds', y: 55},
          ]}
          labelComponent={<VictoryTooltip renderInPortal={false} />}
        />
      </GraphicsS>
    </PageContainer>
  );
};

// Export
export default Graphics;
