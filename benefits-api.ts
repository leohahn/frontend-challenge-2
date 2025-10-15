export enum BenefitType {
  HEALTH_INSURANCE = "HEALTH_INSURANCE",
  GYM = "GYM",
  FOOD_ALLOWANCE = "FOOD_ALLOWANCE",
  DENTAL_INSURANCE = "DENTAL_INSURANCE",
  PATERNITY_LEAVE = "PATERNITY_LEAVE",
  MATERNITY_LEAVE = "MATERNITY_LEAVE",
  MENTAL_CARE = "MENTAL_CARE",
  HOME_OFFICE_ALLOWANCE = "HOME_OFFICE_ALLOWANCE",
  LEARNING_ALLOWANCE = "LEARNING_ALLOWANCE",
}

export type Benefit = {
  id: number
  type: BenefitType
  displayName: string
}

let currentId = 0

const existingBenefits: Benefit[] = [
  {
    id: currentId++,
    type: BenefitType.GYM,
    displayName: "Auxílio academia",
  },
  {
    id: currentId++,
    type: BenefitType.HEALTH_INSURANCE,
    displayName: "Plano de saúde",
  },
]

export async function listBenefits(): Promise<Benefit[]> {
  return new Promise<Benefit[]>(resolve => {
    setTimeout(() => {
      resolve(existingBenefits)
    }, 400)
  })
}

export async function createBenefit(benefit: Benefit): Promise<Benefit> {
  return new Promise<Benefit>(resolve => {
    setTimeout(() => {
      benefit.id = currentId++
      existingBenefits.push(benefit)
      resolve(benefit)
    }, 700)
  })
}

// TODO: implement this endpoint
export async function searchBenefits(): Promise<Benefit[]> {
  throw new Error("not implemented")
}
