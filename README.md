# temperature-conversion
React application that allows users to convert temperatures between Celsius and Fahrenheit
Change the background color of the UI if converted temprature is > 98.6°F or  37°C

## Installation Steps followed to create and run this Repo
* node version: v14.18.0
* npm version: 6.14.15
1. create new repo in git
2. clone the repo to local [git clone (paste SSH key of the created repo)]
3. npx create-react-app temp-conv
4. npm install
5. git remote add upstream [paste ssh key of main repo]
6. npm start

### Unit testing
Implement unit tests using `Jest` library along with `Enzyme`
1. npm install --save-dev jest
2. npm i enzyme / npm install --save-dev @wojtekmaj/enzyme-adapter-react-17

To run unit test 
*  npm test Converter.test.js 
*  npm run test:coverage

#### working of this project is added in the screen record  in GIT with file name `ScrrenRecordFor_Temp_Conversion.gif`

#### Screenshot for test coverage is added in GIT with file name `Unit_Test_Coverage.PNG`

#### component for Temperature Conversion App `src/components/Converter.js`

#### test file `_test/Converter.test.js`

#### styling added in file `App.css`
