import { PostbitsData } from './postbits/PostbitsData';
import { HeroImage } from './styles';
import { WizzData } from './wizz/WizzData';
import { BetterMobilityData } from './bettermobility/BetterMobilityData';
import { HardwarePrototypingData } from './hardwareprototyping/HardwarePrototypingData';
import { PhoenixTransitData } from './phoenixtransit/PhoenixTransitData';
import { SWLCData } from './swlc/SWLCData';

import { tmoData } from './tmobile/tmoData';
import { sparkData } from "./spark/SparkData";
import {openScienceData} from "./opendesign/OpenScienceData"
import { JojoData } from './jojo/JojoData';
import { BlipData } from './blip/BlipData';
import { DesignStudioData } from './designStudio/DesignStudioData';

interface project {
    [x:string]:any
}

export const skills = {
    qualitativeInterviews: "Qualitative Interviews",
    usabilityTesting: "Usability Testing",
    usabilityMetrics: "Usability Metrics",
    fieldStudy: "Field Study",
    coIdeation: "Co-ideation",
    surveys: "Surveys",
    guerillaResearch: "Guerilla Research",
    academicResearch: "Academic Research",
    codesignWorkshops: "Co-design Workshops",
    heuristicEvaluation: "Heuristic Evaluation",
    designStrategy: "Design Strategy",
    softwarePrototyping: "Software Prototyping",
    hardwarePrototyping: "Hardware Prototyping",
    personas: "Personas",
    uiwireframes: "UI Wireframes",
    storyboards: "Storyboards",
    designResearch: "Design Research",
    contentStrategy: "Content Strategy",
    visualDesign: "Visual Design",
    interactionDesign: "Interaction Design",
    observation:"Observation",
    playTesting:"Play Testing",
    prototyping:"Prototyping",
    visualStorytelling:"Visual Storytelling",
    codesign: "Co-design",
    informationDesign: "Information Design",
    systemDesign: "System Design",
    designEducation: "Design Education",
    studioBasedLearning: "Studio-based Learning"

}

export const projectData = {
    // "tmobile": { data: tmoData, size: 2, key: "tmobile", skills:[skills.qualitativeInterviews, skills.coIdeation, skills.codesignWorkshops, skills.designStrategy] },
      "wizz": { data: WizzData, size: 1, key: "wizz", skills:[skills.designResearch, skills.contentStrategy, skills.visualDesign, skills.interactionDesign] },
      "jojo": { data: JojoData, size: 2, key: "jojo", skills:[skills.observation, skills.playTesting, skills.prototyping, skills.visualStorytelling] },

    "phoenixTransit": { data: PhoenixTransitData, size: 1, key: "phoenixtransit", skills: [skills.guerillaResearch, skills.qualitativeInterviews, skills.designStrategy] },

    "swlc": { data: SWLCData, size: 2, key: "swlc", skills: [skills.codesign, skills.informationDesign, skills.interactionDesign] },
    "blip": { data: BlipData, size: 2, key: "blip", skills: [skills.informationDesign, skills.systemDesign, skills.surveys] },
    "design_studio": { data: DesignStudioData, size: 1, key: "design_studio", skills: [skills.designEducation, skills.studioBasedLearning] },



        

   


}