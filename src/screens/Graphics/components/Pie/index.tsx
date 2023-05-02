// Imported Components
import {VictoryPie} from 'victory-native';

// Styled Components
import {GraphicsData} from '../../data';

// Functional Component
export const Pie = () => {
  // Rendering
  return (
    <VictoryPie
      width={250}
      height={250}
      padding={0}
      colorScale={GraphicsData.map(item => item.color)}
      data={GraphicsData}
      labelComponent={<></>}
    />
  );
};
