/* eslint @typescript-eslint/explicit-module-boundary-types: 0 */
/* eslint no-console: 0 */
import { ReportHandler } from 'web-vitals';

type Error = {
  message: string;
};

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals')
      .then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(onPerfEntry);
        getFID(onPerfEntry);
        getFCP(onPerfEntry);
        getLCP(onPerfEntry);
        getTTFB(onPerfEntry);
      })
      .catch((error: Error) => {
        console.log(error.message);
      });
  }
};

export default reportWebVitals;
