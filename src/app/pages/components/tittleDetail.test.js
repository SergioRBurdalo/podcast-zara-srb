import { render, screen } from '@testing-library/react';
import {TittleDetail} from './tittleDetail';

describe('TittleDetail render', () => {
  let mocketJSON;
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
  });
 
  test('Comprobar que renderiza ok TittleDetail', () => {
    render(<TittleDetail jsonData={mocketJSON}/>);
  });
  
 })

  