import { useState } from 'react';
import data from '../../data/data.json';
import {
	StyledH1,
	StyledImg,
	StyledInfo,
	StyledInfoContainer,
	StyledContent,
	StyledSource,
	StyledSourceCont,
	StyledSourceImg,
	StyledTabCont,
	StyledTab,
	StyledTabH1,
	StyledTabNum,
	StyledStatsCont,
	StyledStats,
	StyledStatsH1,
	StyledStatsH3,
	StyledImgSmall,
	StyledImgCont
} from './styles';

const Planets = ({ planetName }) => {
	const [activeTab, setActiveTab] = useState(0);

	const changeTab = number => {
		setActiveTab(number);
	};
	if (!data[planetName]) {
		return 'Loading...';
	}
	return (
		<>
			<StyledInfoContainer>
				<StyledImgCont>
					{activeTab === 0 && (
						<StyledImg src={data[planetName].images.planet} />
					)}
					{activeTab === 1 && (
						<StyledImg src={data[planetName].images.internal} />
					)}
					{activeTab === 2 && (
						<>
							<StyledImg src={data[planetName].images.planet} />
							<StyledImgSmall src={data[planetName].images.geology} />
						</>
					)}
				</StyledImgCont>
				<StyledInfo>
					<StyledH1>{data[planetName].name}</StyledH1>
					{activeTab === 0 && (
						<>
							<StyledContent>{data[planetName].overview.content}</StyledContent>
							<StyledSourceCont>
								<StyledContent>Source:</StyledContent>
								<StyledSource href={data[planetName].overview.source}>
									Wikipedia
									<StyledSourceImg src={'./images/icon-source.svg'} />
								</StyledSource>
							</StyledSourceCont>
						</>
					)}
					{activeTab === 1 && (
						<>
							<StyledContent>
								{data[planetName].structure.content}
							</StyledContent>
							<StyledSourceCont>
								<StyledContent>Source:</StyledContent>
								<StyledSource href={data[planetName].structure.source}>
									Wikipedia
									<StyledSourceImg src='./images/icon-source.svg' />
								</StyledSource>
							</StyledSourceCont>
						</>
					)}
					{activeTab === 2 && (
						<>
							<StyledContent>{data[planetName].geology.content}</StyledContent>
							<StyledSourceCont>
								<StyledContent>Source:</StyledContent>
								<StyledSource href={data[planetName].geology.source}>
									Wikipedia
									<StyledSourceImg src='./images/icon-source.svg' />
								</StyledSource>
							</StyledSourceCont>
						</>
					)}

					<StyledTabCont>
						<StyledTab
							color={data[planetName].color}
							className={activeTab === 0 ? 'active' : ''}
							onClick={() => changeTab(0)}
						>
							<StyledTabNum>01</StyledTabNum>
							<StyledTabH1>OVERVIEW</StyledTabH1>
						</StyledTab>
						<StyledTab
							color={data[planetName].color}
							className={activeTab === 1 ? 'active' : ''}
							onClick={() => changeTab(1)}
						>
							<StyledTabNum>02</StyledTabNum>
							<StyledTabH1>INTERNAL STRUCTURE</StyledTabH1>
						</StyledTab>
						<StyledTab
							color={data[planetName].color}
							className={activeTab === 2 ? 'active' : ''}
							onClick={() => changeTab(2)}
						>
							<StyledTabNum>03</StyledTabNum>
							<StyledTabH1>SURFACE GEOLOGY</StyledTabH1>
						</StyledTab>
					</StyledTabCont>
				</StyledInfo>
				<StyledStatsCont>
					<StyledStats>
						<StyledStatsH3>ROTATION TIME</StyledStatsH3>
						<StyledStatsH1>{data[planetName].rotation}</StyledStatsH1>
					</StyledStats>
					<StyledStats>
						<StyledStatsH3>REVOLUTION TIME</StyledStatsH3>
						<StyledStatsH1>{data[planetName].revolution}</StyledStatsH1>
					</StyledStats>
					<StyledStats>
						<StyledStatsH3>RADIUS</StyledStatsH3>
						<StyledStatsH1>{data[planetName].radius}</StyledStatsH1>
					</StyledStats>
					<StyledStats>
						<StyledStatsH3>AVERAGE TEMP.</StyledStatsH3>
						<StyledStatsH1>{data[planetName].temperature}</StyledStatsH1>
					</StyledStats>
				</StyledStatsCont>
			</StyledInfoContainer>
		</>
	);
};

export default Planets;
