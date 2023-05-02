// Imported Components
import {VictoryPie} from 'victory-native';
import {Caption} from '../Caption';

// Styled Components
import {CaptionContainer, PieContainer} from './style';

// Types
import {PieProps} from './type';

// Functional Component
export const Pie = ({data}: PieProps) => {
  // Rendering
  return (
    <PieContainer>
      <VictoryPie
        width={250}
        height={250}
        padding={0}
        colorScale={data.map(item => item.color)}
        data={data}
        labelComponent={<></>}
      />
      <CaptionContainer>
        {data.map((item, index) => {
          // Rendering
          return <Caption text={item.x} color={item.color} key={index} />;
        })}
      </CaptionContainer>
    </PieContainer>
  );
};
