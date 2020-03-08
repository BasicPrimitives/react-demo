import crossShape from './data/crossShape.js';
import famdata2 from './data/famdata2.js';
import rombusShape from './data/rombusShape.js';
import sandClockShape from './data/sandClockShape.js';
import famdata from './data/famdata.js';
import sideBySide from './data/sideBySide.js';
import skippedMembers from './data/skippedMembers.js';
import horizontalChain from './data/horizontalChain.js';
import alignmentData from './data/alignmentData.js';
import famdataCascade from './data/famdataCascade.js';
import famdataLoops from './data/famdataLoops.js';
import famdataLoopsTest from './data/famdataLoopsTest.js';
import famdataWorld from './data/famdataWorld.js';
import famSpouses from './data/famSpouses.js';
import famdataCharless2 from './data/famdataCharless2.js';
import simpleRombus from './data/simpleRombus.js';
import simpleSandClock from './data/simpleSandClock.js';
import wFamily from './data/wFamily.js';
import simpleFamily from './data/simpleFamily.js';
import matrixLayout from './data/matrixLayout.js';
import familyOrdering from './data/familyOrdering.js';
import dependencies from './data/dependencies.js';
import patents from './data/patents.js';
import financialOwnership from './data/financialOwnership.js';
import mutualFinancialOwnership from './data/mutualFinancialOwnership.js';
import techTree from './data/techTree.js';

export default function service(app) {
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
