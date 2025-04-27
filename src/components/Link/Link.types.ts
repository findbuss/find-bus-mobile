import { AppStackParamList } from '../../navigation/AppStackParamList'
import { AuthStackParamList } from '../../navigation/AuthStackParamList'
import { TabsParamList } from '../../navigation/TabsParamList'

export type LinkType =  AppStackParamList & AuthStackParamList & TabsParamList

export interface LinkProps {
    children: React.ReactNode
    to: keyof LinkType
}
