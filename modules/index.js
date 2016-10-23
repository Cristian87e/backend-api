const PlanetModule = require('./planet/index')
const restApi = require('./common/services')
const CONSTS = require('./common/constants')

restApi.listen(CONSTS.PORT, function () {
  console.log(`Example app listening on port ${CONSTS.PORT}!`);
});
