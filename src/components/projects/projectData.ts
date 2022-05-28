import { PostbitsData } from './postbits/PostbitsData';
import { HeroImage } from './styles';
import { WizzData } from './wizz/WizzData';
import { BetterMobilityData } from './bettermobility/BetterMobilityData';
import { HardwarePrototypingData } from './hardwareprototyping/HardwarePrototypingData';
import { PhoenixTransitData } from './phoenixtransit/PhoenixTransitData';
import { DreamDroneData } from './dreamdrones/DreamDronesData';

import { tmoData } from './tmobile/tmoData';
import { sparkData } from "./spark/SparkData";
import {openScienceData} from "./opendesign/OpenScienceData"

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
    storyboards: "Storyboards"
}

export const projectData = {
    "tmobile": { data: tmoData, size: 2, key: "tmobile", skills:[skills.qualitativeInterviews, skills.coIdeation, skills.codesignWorkshops, skills.designStrategy] },
      "wizz": { data: WizzData, size: 1, key: "wizz", skills:[skills.heuristicEvaluation, skills.qualitativeInterviews, skills.coIdeation, skills.softwarePrototyping] },
            "spark": { data: sparkData, size: 2, key: "spark" , skills:[skills.qualitativeInterviews, skills.surveys, skills.designStrategy]},
    "phoenixTransit": { data: PhoenixTransitData, size: 1, key: "phoenixtransit", skills: [skills.guerillaResearch, skills.designStrategy] },
    "postbits": { data: PostbitsData, size: 2, key: "postbits" , skills:[skills.qualitativeInterviews, skills.fieldStudy, skills.hardwarePrototyping, skills.softwarePrototyping] },

    "dreamdrones": { data: DreamDroneData, size: 1, key: "dreamdrones", skills:[skills.academicResearch, skills.coIdeation, skills.softwarePrototyping] },
    "prototyping": { data: HardwarePrototypingData, size: 1, key: "prototyping", skills:[skills.hardwarePrototyping] },
         "bettermobility": { data: BetterMobilityData, size: 2, key: "bettermobility", skills:[skills.designStrategy] },

        

   


}