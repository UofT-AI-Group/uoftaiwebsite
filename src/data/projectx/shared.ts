import addisonWeatherhead from '../../static/assets/projectx/2021/addison-weatherhead.webp'
import alindGupta from '../../static/assets/projectx/2021/alind-gupta.webp'
import calvinYip from '../../static/assets/projectx/2021/calvin-yip.webp'
import chloeZhao from '../../static/assets/projectx/2021/chloe-zhao.webp'
import farhadHormozdiari from '../../static/assets/projectx/2021/farhad-hormozdiari.webp'
import ingridGiesinger from '../../static/assets/projectx/2021/ingrid-giesinger.webp'
import ireneHarmsen from '../../static/assets/projectx/2021/irene-harmsen.webp'
import ishaSharma from '../../static/assets/projectx/2021/isha-sharma.webp'
import kevinZhu from '../../static/assets/projectx/2021/kevin-zhu.webp'
import liefPagalan from '../../static/assets/projectx/2021/lief-pagalan.webp'
import lisaYu from '../../static/assets/projectx/2021/lisa-yu.webp'
import malaikaAthar from '../../static/assets/projectx/2021/malaika-athar.webp'
import marcusBrubaker from '../../static/assets/projectx/2021/marcus-brubaker.webp'
import maureenTo from '../../static/assets/projectx/2021/maureen-to.webp'
import nayanSaxena from '../../static/assets/projectx/2021/nayan-saxena.webp'
import omarShalash from '../../static/assets/projectx/2021/omar-shalash.webp'
import osvaldoEspinGarcia from '../../static/assets/projectx/2021/osvaldo-espin-garcia.webp'
import pingzhaoHu from '../../static/assets/projectx/2021/pingzhao-hu.webp'
import safaMajeed from '../../static/assets/projectx/2021/safa-majeed.webp'
import shiloMcburney from '../../static/assets/projectx/2021/shilo-mcburney.webp'
import sofiaVillar from '../../static/assets/projectx/2021/sofia-villar.webp'
import taedongYun from '../../static/assets/projectx/2021/taedong-yun.webp'
import varunLodaya from '../../static/assets/projectx/2021/varun-lodaya.webp'
import zoeThompson from '../../static/assets/projectx/2021/zoe-thompson.webp'
import type { Person } from '@/components/kit/Person'
import type { LogoGroup } from '@/components/kit/LogoWall'
import { logos } from './logos'
import type { Milestone, Resource } from './types'
import codeOfConduct from '../../static/assets/codeofconduct.pdf'
import problemStatement from '../../static/assets/Problem_Statement_ProjectX_1.pdf'
import submissionGuidelines from '../../static/assets/Submission Guidelines 2023 (1).pdf'

/** The documents linked from every cycle from 2020 to 2023. */
export const RESOURCES: Resource[] = [
    {
        title: 'Code of Conduct',
        description:
            'Read about our code of conduct throughout the ProjectX 2023 participation.',
        href: codeOfConduct,
        download: 'ProjectX Code of Conduct.pdf',
    },
    {
        title: 'Submission Guidelines',
        description:
            'Read our submission-related criteria and research expectations.',
        href: submissionGuidelines,
        download: 'ProjectX Submission Guidelines 2023.pdf',
    },
    {
        title: 'Problem Definition & Scope',
        description:
            'Read about the ProjectX 2023 themes and background information.',
        href: problemStatement,
        download: 'ProjectX Problem Statement.pdf',
    },
]

/** The judging panel shown on the 2020 page; 2021 lists them first. */
export const JUDGES_2020: Person[] = [
    {
        name: 'Calvin Yip',
        role: 'Domain Expert, University of Toronto',
        photo: calvinYip,
    },
    {
        name: 'Ingrid Giesinger',
        role: 'Domain Expert, University of Toronto',
        photo: ingridGiesinger,
    },
    {
        name: 'Lief Pagalan',
        role: 'Domain Expert, University of Toronto',
        photo: liefPagalan,
    },
    {
        name: 'Zoe Thompson',
        role: 'Domain Expert, University of Toronto',
        photo: zoeThompson,
    },
    {
        name: 'Osvaldo Espin-Garcia',
        role: 'Judge, University of Toronto',
        photo: osvaldoEspinGarcia,
    },
    {
        name: 'Shilo McBurney',
        role: 'Domain Expert, University of Toronto',
        photo: shiloMcburney,
    },
    {
        name: 'Safa Majeed',
        role: 'Domain Expert, University of Toronto',
        photo: safaMajeed,
    },
    {
        name: 'Irene Harmsen',
        role: 'Domain Expert, University of Toronto',
        photo: ireneHarmsen,
    },
]

/** Judges added to the panel on the 2021 page. */
export const JUDGES_2021: Person[] = [
    {
        name: 'Alind Gupta',
        role: 'Judge, University of Toronto',
        photo: alindGupta,
    },
    { name: 'Taedong Yun', role: 'Judge, Google', photo: taedongYun },
    {
        name: 'Sofia Villar',
        role: 'Judge, University of Cambridge',
        photo: sofiaVillar,
    },
    {
        name: 'Pingzhao Hu',
        role: 'Judge, University of Toronto/University of Manitoba',
        photo: pingzhaoHu,
    },
    {
        name: 'Farhad Hormozdiari',
        role: 'Judge, Google',
        photo: farhadHormozdiari,
    },
    {
        name: 'Marcus Brubaker',
        role: 'Judge, York University',
        photo: marcusBrubaker,
    },
]

/** The organizing team shown on both the 2020 and 2021 pages. */
export const TEAM_2020_2021: Person[] = [
    { name: 'Varun Lodaya', role: 'Co-President', photo: varunLodaya },
    { name: 'Isha Sharma', role: 'Co-President', photo: ishaSharma },
    { name: 'Lisa Yu', role: 'Co-Director of Partnerships', photo: lisaYu },
    {
        name: 'Chloe Zhao',
        role: 'Co-Director of Partnerships',
        photo: chloeZhao,
    },
    {
        name: 'Omar Shalash',
        role: 'Co-Director of Partnerships',
        photo: omarShalash,
    },
    { name: 'Kevin Zhu', role: 'Co-Director of Partnerships', photo: kevinZhu },
    {
        name: 'Malaika Athar',
        role: 'Director of Marketing',
        photo: malaikaAthar,
    },
    {
        name: 'Nayan Saxena',
        role: 'ProjectX Research & Logistics Lead',
        photo: nayanSaxena,
    },
    {
        name: 'Addison Weatherhead',
        role: 'ProjectX Research & Logistics Lead',
        photo: addisonWeatherhead,
    },
    {
        name: "Maureen T'O",
        role: 'ProjectX Web Developer Team Lead',
        photo: maureenTo,
    },
]

/** The 2020 and 2021 pages show the same timeline. */
export const TIMELINE_2020_2021: Milestone[] = [
    {
        date: 'May 31',
        title: 'Confirm University Participation',
        detail: 'Participation confirmation deadline for universities.',
    },
    {
        date: 'Jun 14',
        title: 'Team Registration Deadline',
        detail: 'Students will form groups and be onboarded with short presentations from UofT AI, the head judge, and partners.',
    },
    {
        date: 'Sep 1',
        title: 'Competition Starts',
        detail: 'Teams begin research with focus on one of two themes: human-computer interaction or human-human interaction.',
    },
    {
        date: 'Jan 31',
        title: 'Final Deliverables Due',
        detail: 'Final draft of research paper is due from all participating teams.',
    },
    {
        date: 'Feb 14',
        title: 'Winners Announced',
        detail: 'Winning teams are announced by our panel of researchers and industry experts! Awards ceremony for winning teams held at the UofT AI conference.',
    },
]

/** The 2020 and 2021 pages show the same sponsor tiers. */
export const SPONSOR_TIERS_2020_2021: LogoGroup[] = [
    {
        title: 'Solar sponsors',
        logos: logos('google', 'ibm', 'moderna', 'altaml'),
        height: 60,
    },
    {
        title: 'Planetary sponsors',
        logos: logos('accenture', 'nvidia'),
        height: 54,
    },
    {
        title: 'Lunar sponsors',
        logos: logos('23andme', 'vector', 'deepmind'),
        height: 48,
    },
]
