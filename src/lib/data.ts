import { Github, Instagram } from "lucide-react"
import node from '../../public/images/logos/icon-nodejs.svg'
import typescript from '../../public/images/logos/icon-typescript.svg'
import javascript from '../../public/images/logos/icon-javascript.svg'
import react from '../../public/images/logos/icon-react.svg'
import next from '../../public/images/logos/icon-nextjs.svg'
import postgre from '../../public/images/logos/icon-postgresql.svg'
import tailwind from '../../public/images/logos/icon-tailwindcss.svg'
import Daniel from '../../public/images/daniel.png'
import Jonathan from '../../public/images/jonathan.png'
import Kira from '../../public/images/kira.png'

export const Nav_links = [
    {
        label: 'About',
        href: '#about'
    },
    {
        label: 'Skills',
        href: '#skills'
    },
    {
        label: 'Portofolio',
        href: '#portofolio'
    },
    {
        label: 'Experience',
        href: '#experience'
    },
    {
        label: 'Contact',
        href: '#contact'
    }
]

export const Social_Links = [
    {
        icon: Github,
        url: 'https://github.com/adi-adisucipto'
    },
    {
        icon: Instagram,
        url: 'https://www.instagram.com/adi_adisucipto/#'
    }
]

export const skills = [
    {
        icon: javascript,
        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        desc: 'Javascript'
    },
    {
        icon: typescript,
        href: 'https://www.typescriptlang.org/',
        desc: 'Typescript'
    },
    {
        icon: react,
        href: 'https://react.dev/',
        desc: 'React'
    },
    {
        icon: node,
        href: 'https://nodejs.org/en',
        desc: 'Node.js'
    },
    {
        icon: next,
        href: 'https://nextjs.org/',
        desc: 'Next.js'
    },
    {
        icon: postgre,
        href: 'https://www.postgresql.org/',
        desc: 'PostgreSQL'
    },
    {
        icon: tailwind,
        href: 'https://tailwindcss.com/',
        desc: 'Tailwindcss'
    },
]

export const testimoni = [
    {
        pic: Daniel,
        name: 'Daniel Clifford',
    },
    {
        pic: Jonathan,
        name: 'Jonathan Walters'
    },
    {
        pic: Kira,
        name: 'Kira Whittle'
    }
]