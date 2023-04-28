// Imported Components
import {Header} from '../Header';
import {Tab} from '../../routes/Tab';

// Styled Components
import {PageContainerS, PageContent} from './style';

// Types
import {PageContainerProps} from './type';

// Functional Component
export const PageContainer = ({children}: PageContainerProps) => {
  // Rendering
  return (
    <PageContainerS>
      <Header />
      <PageContent>{children}</PageContent>
      <Tab />
    </PageContainerS>
  );
};
