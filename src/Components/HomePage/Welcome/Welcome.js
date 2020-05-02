import React, { Component } from 'react';
import { Button } from 'carbon-components-react'
import './Welcome.scss';

class Welcome extends Component {
	state = {}

	render(){
		return (
			<React.Fragment>
				<div className={"bx--row columns"}>
					<div className={"bx--col verticallyCenter leftColWelcome"}>
						<div>
							<div className={"ApplicationName"}>
								Fire Spread Tracker
							</div>
							<div className={"Subtitle"}>
								Discover the gap between areas at risk
							</div>
							<div className={"Subtitle"}>
								and available emergency services
							</div>
							<Button kind="secondary" className="myBtn" href="#/map/">
								Identify the risk
							</Button>
						</div>
					</div>
					<div className={"bx--col verticallyCenter rightColWelcome"}>
						<div style={{position:"absolute", top:"310px"}}>
							<div className="wrapperFire">
								<div class="fire">
									<div class="flames">
										<div class="flame"></div>
										<div class="flame"></div>
										<div class="flame"></div>
										<div class="flame"></div>
									</div>
									<div class="logs"></div>
								</div>
							</div>
						</div>
						<div style={{position:"absolute", top:"430px"}}>
							<div className={"DescriptionHeader"}>
								Find the areas at most risk
							</div>
							<div className={"DescriptionText"}>
								Australia’s fire season is getting longer and more dangerous.
							</div>
							<div className={"DescriptionText"}>
								Australia is a biodiversity hotspot and millions of plants and animals are in danger
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}

}

export default Welcome;
