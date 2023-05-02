// Imported Components
import {PageContainer} from '../../components/PageContainer';
import {VictoryPie} from 'victory-native';

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
          height={300}
          padding={0}
          colorScale={['blue', 'yellow', 'red']}
          data={[
            {x: 'Cats', y: 35},
            {x: 'Dogs', y: 40},
            {x: 'Birds', y: 55},
          ]}
          labelComponent={<></>}
        />
      </GraphicsS>
    </PageContainer>
  );
};

// Export
export default Graphics;
