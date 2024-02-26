import * as React from 'react';
import { ISecoNewsProps } from './ISecoNewsProps';
import "../assets/SecoNews.css";
import { LayoutBuilder} from "../organigramPakage/index";

export default function(): React.ReactElement<ISecoNewsProps> {
  console.log(LayoutBuilder,"hello")
    return (
      <section>
        <div className="container">
          <div className="box level-1">
              <ul>
                <h1>Seco active users</h1><br />
                <h3><a href="https://secobelgium.sharepoint.com/sites/seconnect/Lists/News%20groups/AllItems.aspx?FilterField1=Newsgroup&FilterValue1=SECO%20%2D%20Active%20Users&FilterType1=Text&FilterDisplay1=SECO%20%2D%20Active%20Users&groupBy=Newsgroup&viewid=358b535b%2D698f%2D458d%2D8cbc%2D314b11e95156" target="_blank">Users</a></h3><br />
                <span>News showed on <a href="https://secobelgium.sharepoint.com/sites/seconnect" target="_blank">link</a></span>
              </ul>
          </div>
          <ol className="level-8-wrapper"> 
          <li>
            <section className="box2 level-5">
                <ul>
                  <h1>SECO - Active Users Belgium</h1>
                  <h3><a href="https://secobelgium.sharepoint.com/sites/seconnect/Lists/News%20groups/AllItems.aspx?useFiltersInViewXml=1&FilterField1=Newsgroup&FilterValue1=SECO%20%2D%20Active%20Users%20Belgium&FilterType1=Text&FilterDisplay1=SECO%20%2D%20Active%20Users%20Belgium&groupBy=Newsgroup&viewid=358b535b%2D698f%2D458d%2D8cbc%2D314b11e95156" target="_blank">Users</a></h3>
                  <span>News showed on <a href="https://secobelgium.sharepoint.com/sites/Belgium" target="_blank">Link</a></span>
                </ul>
            </section>
            <ol className="level-4-wrapper">
                <li>
                  <ul>
                    <h4 className="level-4 rectangle">SECO - Active Users Belgium CO</h4>
                    <h5><a href="https://secobelgium.sharepoint.com/sites/seconnect/Lists/News%20groups/AllItems.aspx?useFiltersInViewXml=1&FilterField1=Newsgroup&FilterValue1=SECO%20%2D%20Active%20Users%20Belgium%20CO&FilterType1=Text&groupBy=Newsgroup&viewid=358b535b%2D698f%2D458d%2D8cbc%2D314b11e95156" target="_blank">Users</a></h5>
                    <span>News showed on <a href="https://secobelgium.sharepoint.com/sites/Belgium/SitePages/SECO-CO-BE.aspx">Link</a></span>
                  </ul>
                </li>
                <li>
                 <ul>
                    <h4 className="level-4 rectangle">SECO - Active Users Belgium CI</h4>
                    <h5><a href="https://secobelgium.sharepoint.com/sites/seconnect/Lists/News%20groups/AllItems.aspx?useFiltersInViewXml=1&FilterField1=Newsgroup&FilterValue1=SECO%20%2D%20Active%20Users%20Belgium%20CI&FilterType1=Text&groupBy=Newsgroup&viewid=358b535b%2D698f%2D458d%2D8cbc%2D314b11e95156" target="_blank">Users</a></h5>
                    <span>News showed on<br /> <a href="https://secobelgium.sharepoint.com/sites/secoci" target="_blank">Link</a> and <a href="https://secobelgium.sharepoint.com/sites/Belgium/SitePages/SECO-CI-BE.aspx" target="_blank">Link</a></span>
                 </ul>
                </li>
                <li>
                    <ul>
                      <h4 className="level-4 rectangle">SECO - Active Users Belgium ASBL</h4>
                      <h5><a href="https://secobelgium.sharepoint.com/sites/seconnect/Lists/News%20groups/AllItems.aspx?useFiltersInViewXml=1&FilterField1=Newsgroup&FilterValue1=SECO%20%2D%20Active%20Users%20Belgium%20ASBL&FilterType1=Text&groupBy=Newsgroup&viewid=358b535b%2D698f%2D458d%2D8cbc%2D314b11e95156" target="_blank">Users</a></h5>
                      <span>News showed on <br /><a href="https://secobelgium.sharepoint.com/sites/SecoBelgiumASBL-GSQ" target="_blank">Link</a> and <a href="https://secobelgium.sharepoint.com/sites/Belgium/SitePages/SECO-BE-ASBL.aspx" target="_blank">Link</a></span>
                    </ul>
                </li>
              </ol>
            </li>
            <li>
              <section className="box2 level-5">
                  <ul>
                    <h1>SECO - Active Users Luxembourg</h1>
                    <h3><a href="https://secobelgium.sharepoint.com/sites/seconnect/Lists/News%20groups/AllItems.aspx?useFiltersInViewXml=1&FilterField1=Newsgroup&FilterValue1=SECO%20%2D%20Active%20Users%20Luxembourg&FilterType1=Text&groupBy=Newsgroup&viewid=358b535b%2D698f%2D458d%2D8cbc%2D314b11e95156" target="_blank">Users</a></h3>
                    <span>News showed on <a href="https://secobelgium.sharepoint.com/sites/Lux" target="_blank">Link</a></span>
                  </ul>
              </section>
            </li>
            <li>
              <section className="box2 level-5">
                  <ul>
                    <h1>SECO - Active Users Netherlands</h1>
                    <h3><a href="https://secobelgium.sharepoint.com/sites/seconnect/Lists/News%20groups/AllItems.aspx?useFiltersInViewXml=1&FilterField1=Newsgroup&FilterValue1=SECO%20%2D%20Active%20Users%20Netherlands&FilterType1=Text&groupBy=Newsgroup&viewid=358b535b%2D698f%2D458d%2D8cbc%2D314b11e95156" target="_blank">Users</a></h3>
                    <span>News showed on <a href="https://secobelgium.sharepoint.com/sites/Netherlands" target="_blank">Link</a></span>
                  </ul>
              </section>
            </li>
          </ol>
        </div>
      </section>
    );
  }

