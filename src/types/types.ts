export type Achievement = {
    description: string
}

export type Position = {
    title: string
    period: string
}

export type Project = {
    description: string
    achievements: Achievement[]
    positions: Position[]
    skills: string[]
}

export type Experience = {
    company: string
    companyDisplayName: string
    logo_path: string
    contract: string
    period: string
    location: string
    projects: Project[]
}
