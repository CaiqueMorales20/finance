// Navigation
import {Tab} from '../../routes/Tab';

// Styled Components
import {PageContainerS} from './style';

// Types
import {PageContainerProps} from './type';

// Functional Component
export const PageContainer = ({children}: PageContainerProps) => {
  // Rendering
  return (
    <PageContainerS>
      {children}
      <Tab />
    </PageContainerS>
  );
};
