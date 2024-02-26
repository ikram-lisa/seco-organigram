import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface ISecoNewsProps {
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
  context: WebPartContext;
}
