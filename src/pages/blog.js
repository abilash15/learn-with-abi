import React from "react";
import theme from "theme";
import { Theme, Link, Strong, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Menu, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"blog"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/6027e9d3977a55001e57bde9/images/SPRK_default_preset_name_custom%20%E2%80%93%201.png?v=2021-05-18T05:30:14.939Z"} type={"image/x-icon"} />
		</Helmet>
		<Components.QuarklycommunityKitMobileSidePanel>
			<Section>
				<Box
					display="flex"
					padding="12px 0"
					justify-content="space-between"
					align-items="center"
					flex-direction="row"
					md-flex-direction="column"
				>
					<Text margin="0" md-margin="0px 0 20px 0" text-align="left" font="--lead">
						<Strong>
							Learn with ABI
						</Strong>
					</Text>
					<Menu
						display="flex"
						justify-content="center"
						font="--base"
						font-weight="700"
						md-flex-direction="column"
						md-align-items="center"
					>
						<Override slot="link" text-decoration="none" color="--dark" padding="6px 12px" />
						<Override slot="link-active" color="--primary" />
						<Override slot="item" padding="6px" />
					</Menu>
				</Box>
			</Section>
		</Components.QuarklycommunityKitMobileSidePanel>
		<Components.QuarklycommunityKitBackToTop />
		<Section padding="140px 0" sm-padding="40px 0" background="url(https://images.unsplash.com/photo-1515600051222-a3c338ff16f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80) center/cover">
			<Box max-width="240px" padding="50px 80px 80px 50px" background="--color-light" color="--dark">
				<Text
					as="h4"
					font="--base"
					color="--grey"
					letter-spacing="1px"
					text-transform="uppercase"
					margin="6px 0"
				>
					About me
				</Text>
				<Text as="h2" font="--headline2" margin="0 0 12px 0">
					Hey I’m Abilash
				</Text>
				<Text font="--base">
					My name is Abilash. Moore, born and raised in France, worked as a professional photographer and videographer for more than 10 years, awarded the CDS Documentary Essay Prize in 2018 and Best Photographer of The Year 2019 by Sony World Photography Awards.
				</Text>
			</Box>
		</Section>
		<Components.QuarklycommunityKitBackToTop />
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});