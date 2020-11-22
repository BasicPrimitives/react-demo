const crossShape = require('./data/crossShape.js');
const famdata2 = require('./data/famdata2.js');
const rombusShape = require('./data/rombusShape.js');
const sandClockShape = require('./data/sandClockShape.js');
const famdata = require('./data/famdata.js');
const sideBySide = require('./data/sideBySide.js');
const skippedMembers = require('./data/skippedMembers.js');
const horizontalChain = require('./data/horizontalChain.js');
const alignmentData = require('./data/alignmentData.js');
const famdataCascade = require('./data/famdataCascade.js');
const famdataLoops = require('./data/famdataLoops.js');
const famdataLoopsTest = require('./data/famdataLoopsTest.js');
const famdataWorld = require('./data/famdataWorld.js');
const famSpouses = require('./data/famSpouses.js');
const famdataCharless2 = require('./data/famdataCharless2.js');
const simpleRombus = require('./data/simpleRombus.js');
const simpleSandClock = require('./data/simpleSandClock.js');
const wFamily = require('./data/wFamily.js');
const simpleFamily = require('./data/simpleFamily.js');
const matrixLayout = require('./data/matrixLayout.js');
const familyOrdering = require('./data/familyOrdering.js');
const dependencies = require('./data/dependencies.js');
const patents = require('./data/patents.js');
const financialOwnership = require('./data/financialOwnership.js');
const mutualFinancialOwnership = require('./data/mutualFinancialOwnership.js');
const techTree = require('./data/techTree.js');

function service(app) {
  app.use('/load-demofamilychartslist', (req, res) => {
    const names = {
      '2 Cross Relations': 'crossShape',
      '3 Cross Relations': 'famdata2',
      Rombus: 'rombusShape',
      'Sand Clock': 'sandClockShape',
      Mix: 'famdata',
      'Side By Side': 'sideBySide',
      'Skipped Members': 'skippedMembers',
      'Horizontal Chain': 'horizontalChain',
      Alignment: 'alignmentData',
      Cascade: 'famdataCascade',
      Loops: 'famdataLoops',
      'World Dynamics': 'famdataWorld',
      Spouses: 'famSpouses',
      'Inter Marriage': 'famdataCharless2',
      'Simple Rombus': 'simpleRombus',
      'Simple Sand Clock': 'simpleSandClock',
      'W Shape Family': 'wFamily',
      'Simple Family': 'simpleFamily',
      'Matrix Family Layout': 'matrixLayout'
    };
    return res.json(names);
  });

  app.use('/load-demofamilychart', (req, res) => {
    let result = { message: `Chart ${req.name} not found!` };

    const { name } = req.query;
    switch (name) {
      case 'crossShape':
        result = crossShape;
        break;
      case 'famdata2':
        result = famdata2;
        break;
      case 'rombusShape':
        result = rombusShape;
        break;
      case 'sandClockShape':
        result = sandClockShape;
        break;
      case 'famdata':
        result = famdata;
        break;
      case 'sideBySide':
        result = sideBySide;
        break;
      case 'skippedMembers':
        result = skippedMembers;
        break;
      case 'horizontalChain':
        result = horizontalChain;
        break;
      case 'alignmentData':
        result = alignmentData;
        break;
      case 'famdataCascade':
        result = famdataCascade;
        break;
      case 'famdataLoops':
        result = famdataLoops;
        break;
      case 'famdataWorld':
        result = famdataWorld;
        break;
      case 'famSpouses':
        result = famSpouses;
        break;
      case 'famdataCharless2':
        result = famdataCharless2;
        break;
      case 'simpleRombus':
        result = simpleRombus;
        break;
      case 'simpleSandClock':
        result = simpleSandClock;
        break;
      case 'wFamily':
        result = wFamily;
        break;
      case 'simpleFamily':
        result = simpleFamily;
        break;
      case 'matrixLayout':
        result = matrixLayout;
        break;
      case 'familyOrdering':
        result = familyOrdering;
        break;
      case 'dependencies':
        result = dependencies;
        break;
      case 'patents':
        result = patents;
        break;
      case 'financialownership':
        result = financialOwnership;
        break;
      case 'mutualfinancialownership':
        result = mutualFinancialOwnership;
        break;
      case 'techtree':
        result = techTree;
        break;
      default:
        break;
    }
    return res.json(result);
  });
}

module.exports = service;