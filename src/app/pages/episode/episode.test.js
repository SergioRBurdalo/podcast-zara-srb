import { render } from '@testing-library/react';
import {Episode} from './episode';

describe('Detail render', () => {
  let mocketJSON;
  let isLoading;
  beforeEach(() => {
    mocketJSON = [
      { id:
        { attributes:
          {'im:id':0}
        }
      },
      { id:
        { attributes:
          {'im:id':1}
        }
      },
      { id:
        { attributes:
          {'im:id':2}
        }
      },
    ];
    isLoading= true;
  });
 
  test('Comprobar que renderiza ok Episode', () => {
    render(<Episode isLoading={isLoading} jsonData={mocketJSON}/>);
  });
  
 });

  