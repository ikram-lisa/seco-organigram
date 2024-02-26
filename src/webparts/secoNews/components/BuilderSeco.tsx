import * as React from 'react';
import { ISecoNewsProps } from './ISecoNewsProps';
import "../assets/SecoNews.css";
import { LayoutBuilder, popupMaxShownMembersSetter} from "../organigramPakage/index";
import SharePointApiService from './SharePointApiService';

export default class SecoNews extends React.Component<ISecoNewsProps, {groupedData: { [department: string]: { persons: string[]; content: string;links: string[] ; linkTwee: string[]} }}> {
  private apiService: SharePointApiService;

  constructor(props: ISecoNewsProps){
    super(props);
    this.apiService = new SharePointApiService(this.props.context);
    this.state = {
      groupedData: {}
    }
  }

  // public componentDidMount() {
  //   this.apiService.getListItems('1011b9bb-b822-4747-a10b-b3e1763ddcd4')
  //     .then((data: any) => {
  //      console.log(data)
  //     });
  // }
  public async componentDidMount() {
    const data = await this._fetchSharePointData();
    this.setState({
      groupedData: data
    });
  }
  private async _fetchSharePointData(): Promise<{ [department: string]: { persons: string[]; links: string[]; content: string ; linkTwee: string[]} }> {
    try {
      const response = await this.apiService.getListItems('1011b9bb-b822-4747-a10b-b3e1763ddcd4');
      console.log("Response: ", response);
  
      const groupedData: { [department: string]: { persons: string[]; links: string[]; content: string ; linkTwee: string[]} } = {};
  
      for (let item of response.value) {
        const department = item.Department;
        const title = item.Title;
        const link = item.Link;
        const linkTwee=item.LinkTwee
  
        if (department && title) {
          if (!groupedData[department]) {
              groupedData[department] = { persons: [], links: [], content: "" , linkTwee: []};
          }
          groupedData[department].persons.push(title);
          if(link){
              groupedData[department].links.push(link.Url);
          }
          if(linkTwee){
            groupedData[department].links.push(linkTwee.Url);
        }
      }
      }
  
      console.log('Grouped data:', groupedData); // Log the final grouped data
  
      return groupedData;
    } catch (error) {
      console.log('Error fetching SharePoint data:', error);
      return {}; // Return an empty object in case of an error
    }
  }
  
  
  public render(): React.ReactElement<ISecoNewsProps> {
    popupMaxShownMembersSetter(4);
    console.log(this.state.groupedData)
    if (Object.keys(this.state.groupedData).length === 0) {
      return <div>Loading...</div>;
    }
    const directieData = this.state.groupedData["Directie"];
    const directieLinks = directieData ? directieData.links : [];
    const marketingData = this.state.groupedData["Marketing"];
    const marketingLink = marketingData ? marketingData.links :[];
    const hrData= this.state.groupedData["HR"];
    const hrLinks= hrData ? hrData.links :[];
    // const directieLinksTwee = directieData ? directieData.linkTwee : [];
    // const doubleLink = [...directieLinks, ...directieLinksTwee];
    if (directieLinks.length === 0 && marketingLink.length === 0 && hrLinks.length === 0) {
      return <div>There are no links</div>;
    }
    return (
      <>
          <LayoutBuilder
            layout={{
              type: "Tree",
              parentNode: {
                type: "ParentNode",
                newsNode: true,
                title:"Directie" ,
                newsLinks: directieLinks,
                roles:this.state.groupedData["Directie"].persons,
                color: "var(--myColor)"
              },
              stages: [
                {
                  type: "ThreeChild",
                  leftNode: {
                    type: "Vertical",
                    parentNode: {
                      popupHref: "#",
                      title: "Marketing",
                      type: "ParentNode",
                      newsNode: true,
                      newsLinks: marketingLink,
                      roles:this.state.groupedData["Marketing"].persons,
                      color: "#C8B499"
                    },
                    children: [
                      {
                        popupHref: "#",
                        title: "Marketting",
                        type: "VerticalNode",
                        newsNode: true,
                        roles:this.state.groupedData["Marketing"].persons,
                        newsLinks:marketingLink
                      },
                      {
                        popupHref: "#",
                        title: "Marketting",
                        type: "VerticalNode",
                        newsNode: true,
                        roles:this.state.groupedData["Marketing"].persons,
                        newsLinks: marketingLink
                      },
                      {
                        popupHref: "#",
                        title: "Marketting",
                        type: "VerticalNode",
                        newsNode: true,
                        roles:this.state.groupedData["Marketing"].persons,
                        newsLinks: marketingLink
                      }
                    ]
                  },
                  middleNode: {
                    popupHref: "#",
                    title: "Marketting",
                    type: "MiddleNode",
                    newsNode: true,
                    newsLinks:marketingLink,
                    roles:this.state.groupedData["Marketing"].persons,
                    color: "#79B371"
                  },
                  rightNode: {
                    popupHref: "#",
                    title: "HR",
                    type: "RightNode",
                    newsNode: true,
                    newsLinks:  hrLinks,
                    roles:this.state.groupedData["HR"].persons,
                    color: "#A388BE"
                  }
                }
              ]
            }}
          />
      </>
    );
  }
  
}
