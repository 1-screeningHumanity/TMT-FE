interface rankBoxType {
  rank: number
  changingRank: number
  nickname: string
  profit: number
  isAsseted : boolean
}

interface assetRankDataType {
  id : number
  nickname : string
  ranking : number
  won : number
  changeRanking : number
}

interface dailyRankDataType {
  profit : number
  nickname : string
  todayRanking : number
  changeRanking : number
}

interface weeklyRankDataType {
  profit : number
  nickname : string
  ranking : number
  changeRanking : number
}

export type { rankBoxType, assetRankDataType, dailyRankDataType, weeklyRankDataType}
