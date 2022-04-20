const Router = require('express').Router();

const { FetchBoothMaster, AddBoothMaster, EditBoothMaster, DeleteBoothMaster } = require('./controller/BoothMaster');
const { AddTransaction, DeleteTransaction, FetchTransaction, FetchRevenue, FetchPageCount } = require('./controller/BoothTransaction');
const { FetchCompanyName, AddCompanyName, EditCompanyName } = require('./controller/CompanyName');
const { EditJourneyMaster, AddJourneyMaster, FetchJourneyMaster, DeleteJourneyMaster } = require('./controller/JourneyMaster');
const { FetchTollName, AddTollName, EditTollName, DeleteTollName } = require('./controller/TollName');
const { FetchTollPlazaFeeRules, AddTollPlazaFeeRules, EditTollPlazaFeeRules, DeleteTollPlazaFeeRules } = require('./controller/TollPlazaFeeRules');
const { EditUser, AddUser, FetchUser, DeleteUser } = require('./controller/User');
const { EditVehicleMaster, AddVehicleMaster, FetchVehicleMaster, DeleteVehicleMaster } = require('./controller/VehicleMaster');
const { Authenticate } = require('./android/Authentication');
const { CheckConnection } = require('./android/Android');
const { Download } = require('./controller/Download');

//main application routes
Router.post('/api/boothtransaction/add', AddTransaction);
Router.post('/api/boothtransaction/delete', DeleteTransaction);
Router.get('/api/boothtransaction/fetch', FetchTransaction);
Router.get('/api/boothtransaction/revenue', FetchRevenue);
Router.get('/api/boothtransaction/pagecount', FetchPageCount)

Router.get('/api/boothmaster/fetch', FetchBoothMaster);
Router.post('/api/boothmaster/add', AddBoothMaster);
Router.post('/api/boothmaster/edit', EditBoothMaster);
Router.post('/api/boothmaster/delete', DeleteBoothMaster);


Router.get('/api/companyname/fetch', FetchCompanyName);
Router.post('/api/companyname/add', AddCompanyName);
Router.post('/api/companyname/edit', EditCompanyName);

Router.get('/api/journeymaster/fetch', FetchJourneyMaster);
Router.post('/api/journeymaster/add', AddJourneyMaster);
Router.post('/api/journeymaster/edit', EditJourneyMaster);
Router.post('/api/journeymaster/delete', DeleteJourneyMaster);


Router.get('/api/tollname/fetch', FetchTollName);
Router.post('/api/tollname/add', AddTollName);
Router.post('/api/tollname/edit', EditTollName);
Router.post('/api/tollname/delete', DeleteTollName);


Router.get('/api/tollplazafeerules/fetch', FetchTollPlazaFeeRules);
Router.post('/api/tollplazafeerules/add', AddTollPlazaFeeRules);
Router.post('/api/tollplazafeerules/edit', EditTollPlazaFeeRules);
Router.post('/api/tollplazafeerules/delete', DeleteTollPlazaFeeRules);


Router.get('/api/user/fetch', FetchUser);
Router.post('/api/user/add', AddUser);
Router.post('/api/user/edit', EditUser);
Router.post('/api/user/delete', DeleteUser);


Router.get('/api/vehiclemaster/fetch', FetchVehicleMaster);
Router.post('/api/vehiclemaster/add', AddVehicleMaster);
Router.post('/api/vehiclemaster/edit', EditVehicleMaster);
Router.post('/api/vehiclemaster/delete', DeleteVehicleMaster);



//android application routes
Router.post('/api/authenticate', Authenticate);
Router.get('/', CheckConnection);
Router.post('/api/download', Download);


exports.Router = Router;