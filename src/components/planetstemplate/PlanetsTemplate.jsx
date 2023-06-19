import { useState } from 'react';
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

const Planets = () => {
	const [activeTab, setActiveTab] = useState(1);

	const changeTab = number => {
		setActiveTab(number);
	};

	return (
		<>
			<StyledInfoContainer>
				<StyledImgCont>
					{activeTab === 1 && <StyledImg src='./images/planet-mercury.svg' />}
					{activeTab === 2 && (
						<StyledImg src='./images/planet-mercury-internal.svg' />
					)}
					{activeTab === 3 && (
						<>
							<StyledImg src='./images/planet-mercury.svg' />
							<StyledImgSmall src='./images/geology-mercury.png' />
						</>
					)}
				</StyledImgCont>
				<StyledInfo>
					<StyledH1>MERCURY</StyledH1>
					{activeTab === 1 && (
						<>
							<StyledContent>
								Mercury is the smallest planet in the Solar System and the
								closest to the Sun. Its orbit around the Sun takes 87.97 Earth
								days, the shortest of all the Sun's planets. Mercury is one of
								four terrestrial planets in the Solar System, and is a rocky
								body like Earth. That's Mercury. <br />
							</StyledContent>
							<StyledSourceCont>
								<StyledContent>Source:</StyledContent>
								<StyledSource href='https://en.wikipedia.org/wiki/Mercury_(planet)'>
									Wikipedia
									<StyledSourceImg src='./images/icon-source.svg' />
								</StyledSource>
							</StyledSourceCont>
						</>
					)}
					{activeTab === 2 && (
						<>
							<StyledContent>
								Mercury appears to have a solid silicate crust and mantle
								overlying a solid, iron sulfide outer core layer, a deeper
								liquid core layer, and a solid inner core. The planet's density
								is the second highest in the Solar System at 5.427 g/cm3 , only
								slightly less than Earth's density. <br />
							</StyledContent>
							<StyledSourceCont>
								<StyledContent>Source:</StyledContent>
								<StyledSource href='https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure'>
									Wikipedia
									<StyledSourceImg src='./images/icon-source.svg' />
								</StyledSource>
							</StyledSourceCont>
						</>
					)}
					{activeTab === 3 && (
						<>
							<StyledContent>
								Mercury's surface is similar in appearance to that of the Moon,
								showing extensive mare-like plains and heavy cratering,
								indicating that it has been geologically inactive for billions
								of years. It is more heterogeneous than either Mars's or the
								Moon’s. <br />
							</StyledContent>
							<StyledSourceCont>
								<StyledContent>Source:</StyledContent>
								<StyledSource href='https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology'>
									Wikipedia
									<StyledSourceImg src='./images/icon-source.svg' />
								</StyledSource>
							</StyledSourceCont>
						</>
					)}

					<StyledTabCont>
						<StyledTab
							className={activeTab === 1 ? 'active' : ''}
							onClick={() => changeTab(1)}
						>
							<StyledTabNum>01</StyledTabNum>
							<StyledTabH1>OVERVIEW</StyledTabH1>
						</StyledTab>
						<StyledTab
							className={activeTab === 2 ? 'active' : ''}
							onClick={() => changeTab(2)}
						>
							<StyledTabNum>02</StyledTabNum>
							<StyledTabH1>INTERNAL STRUCTURE</StyledTabH1>
						</StyledTab>
						<StyledTab
							className={activeTab === 3 ? 'active' : ''}
							onClick={() => changeTab(3)}
						>
							<StyledTabNum>03</StyledTabNum>
							<StyledTabH1>SURFACE GEOLOGY</StyledTabH1>
						</StyledTab>
					</StyledTabCont>
				</StyledInfo>
				<StyledStatsCont>
					<StyledStats>
						<StyledStatsH3>ROTATION TIME</StyledStatsH3>
						<StyledStatsH1>58.6 DAYS</StyledStatsH1>
					</StyledStats>
					<StyledStats>
						<StyledStatsH3>REVOLUTION TIME</StyledStatsH3>
						<StyledStatsH1>87.97 DAYS</StyledStatsH1>
					</StyledStats>
					<StyledStats>
						<StyledStatsH3>RADIUS</StyledStatsH3>
						<StyledStatsH1>2,439.7 KM</StyledStatsH1>
					</StyledStats>
					<StyledStats>
						<StyledStatsH3>AVERAGE TEMP.</StyledStatsH3>
						<StyledStatsH1>430ºC</StyledStatsH1>
					</StyledStats>
				</StyledStatsCont>
			</StyledInfoContainer>
		</>
	);
};

export default Planets;
