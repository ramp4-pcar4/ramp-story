const config = {
    title: 'NPRI Sector Overview: Pulp and Paper',
    introSlide: {
        logo: {
            src: '',
            altText: ''
        },
        title: 'NPRI Sector Overview: Pulp and Paper',
        subtitle: ''
    },
    slides: [
        {
            title: 'On this page',
            panel: [
                {
                    title: 'Pulp and paper',
                    content: `The pulp and paper industry is among the key sectors that are required to report annually to the National Pollutant Release Inventory ([NPRI](https://www.canada.ca/en/services/environment/pollution-waste-management/national-pollutant-release-inventory.html)). Since 1993, businesses, institutions and other facilities across Canada have been reporting to the NPRI their releases of pollutants to air, water and land and the pollutants they transfer off-site for disposal and recycling. All of the information collected is publicly available on the [NPRI website](https://www.canada.ca/en/services/environment/pollution-waste-management/national-pollutant-release-inventory.html). Different levels of government use this data to set priorities for environmental management and public health, as well as to provide information to Canadians about pollutant releases.

This sector overview covers substances reported to the NPRI by Canadian pulp and paper mills from 2010 to 2019. It also summarizes what facilities are doing to mitigate the environmental impacts of their operations and prevent pollution. 

This overview of the pulp and paper sector reproduces the key points presented in the report produced, as part of the NPRI [Academic Challenge](https://www.canada.ca/en/services/environment/pollution-waste-management/national-pollutant-release-inventory/partnerships/academic-challenge.html), by students in the Environmental Management Masters program at the Université de Sherbrooke. Learn more about other NPRI [partnership and collaboration](https://www.canada.ca/en/services/environment/pollution-waste-management/national-pollutant-release-inventory/partnerships.html) initiatives.`,
                    type: 'text'
                },
                {
                    src:
                        '410b88da-0ed1-4749-903f-5e76c24e2e5f/assets/en/NPRIpictogramme-2016data-EN__1553797637582__w1430.jpg',
                    type: 'image',
                    altText:
                        'An image describing the flow from industry of on-site releases to air, water, and land, on-site disposals, off-site disposals, and off-site transfers.'
                }
            ]
        },
        {
            title: 'Pulp and paper sector',
            panel: [
                {
                    title: 'Pulp and paper sector',
                    content: `The pulp and paper industry specializes in processing wood into a wide variety of pulp, papers and paperboard products, which are used in daily life in many forms, e.g., hygiene products and printing paper. However, some paper-based communications products are declining with the rise of digital media, leading the industry to [transform](https://www.nrcan.gc.ca/our-natural-resources/forests-forestry/forest-industry-trade/overview-canadas-forest-industry/13311?_ga=2.160568500.801585218.1626356732-1958057264.1607712157) itself to remain competitive and ensure economic resilience. The industry continues to be a pillar of the Canadian economy. From 2009 to 2019, it generated an [annual average of $8.4 billion](https://www.nrcan.gc.ca/our-natural-resources/forests-forestry/state-canadas-forests-report/how-does-forest-sector-contribut/indicator-gross-domestic-product/16556?_ga=2.189675820.649404953.1617160478-1132748700.1617160478). Declining demand for paper and stringent environmental regulations in recent years are reflected in NPRI data by a 23% decrease in the number of reporting pulp and paper facilities since 2010.`,
                    type: 'text'
                },
                {
                    src: '/f6f7baf4-cccb-4521-a037-b4691b0f0d49/assets/en/PP_sector.jpg',
                    altText: 'A stock image of a pulp and paper facility.',
                    type: 'image'
                }
            ]
        },
        {
            title: 'Where are pulp and paper facilities located?',
            panel: [
                {
                    title: 'Where are pulp and paper facilities located?',
                    content: `Pulp and paper facilities are located across Canada, except in Prince Edward Island, Nunavut, the Northwest Territories and Yukon. Most manufacturing takes place in Quebec, Ontario and British Columbia. In 2019, 101 facilities from this sector reported pollutant releases to the NPRI. Almost all of pulp and paper facilities are located near watercourses, which are an essential resource for their operations.`,
                    type: 'text'
                },
                {
                    config: '/f6f7baf4-cccb-4521-a037-b4691b0f0d49/ramp-config/en/locations.json',
                    type: 'map'
                }
            ]
        },
        {
            title: 'Pulp and paper manufacturing',
            panel: [
                {
                    title: 'Pulp and paper manufacturing',
                    content: `Pulp and paper products are primarily manufactured from wood, which is mainly composed of three organic polymers: lignin, cellulose and hemicellulose.  Recovered paper can also be used as secondary fibre furnish for pulp and paper manufacturing. 

Pulp and paper sector facilities are chemical pulp, mechanical pulp, or paper-manufacturing mills. In 2019, 27% of the sector's facilities were chemical pulp mills, 8% were mechanical pulp mills, and 65% were paper-manufacturing mills. According to Forest Products Association of Canada ([FPAC](https://www.fpac.ca/?no_redirect=true)) data, chemical pulp mills contributed 46% of the pulp and paper sector's production (in tons), mechanical pulp mills contributed 30%, and paper products mills contributed 24%.

Several pollutants reportable under NPRI are released to the environment as by-products of pulp and paper manufacturing. Depending on the manufacturing process applied to wood and recycled fibre, i.e., either chemical or mechanical, the manufacturing steps and pollutants reported to the NPRI will change. The following is a description of some of these processes.`,
                    type: 'text'
                }
            ]
        },
        {
            title: 'Mechanical process',
            panel: [
                {
                    title: 'Mechanical process',
                    content: `The mechanical process primarily relies on physical action (attrition) to separate fibres. This process retains most of the lignin in the pulp, which is the substance that binds cellulose fibres together. Thus, the mechanical process provides higher pulp yield. Mechanical pulps are typically characterized by their high stiffness, but relatively low strength due to the presence of lignin. There are also mechanical pulp mills that use chemical and thermal pretreatment of wood chips followed by mechanical refining and bleaching (Bleached chemi-thermo mechanical pulping or BCTMP). Mechanical pulps are used for the manufacturing of newsprint and catalog paper.`,
                    type: 'text'
                },
                {
                    caption:
                        'Source: Gettyimages, Dorling Kindersley (2021), [Diagram of a paper making factory](https://www.gettyimages.ca/detail/illustration/diagram-of-a-paper-making-factory-royalty-free-illustration/75488548?adppopup=true)',
                    src: '/f6f7baf4-cccb-4521-a037-b4691b0f0d49/assets/en/Mechanical_process_EN.png',
                    type: 'image',
                    altText:
                        'Step 1. Preparation of raw material: wood chips are mechanically shredded. Step 2. Pulping and bleaching. Step 3. Pulp is finished in the paper machine. Step 4. Shipping of the final product.'
                }
            ]
        },
        {
            title: 'Chemical process',
            panel: [
                {
                    title: 'Chemical process',
                    content: `In a chemical pulping process, wood is cooked in an aqueous de-pulping solution of alkaline, acidic or neutral pulping chemicals. This solution is used to extract cellulose from the wood by dissolving lignin and hemicellulose. The chemical process therefore results in a lower lignin content and a lower pulp yield than the mechanical process. In addition, unlike mechanical pulps, the fibres in chemical pulps are not cut and result in strong papers because the lignin is largely removed. There are three main chemical wood pulping processes currently in use: kraft, sulphite, and semi-chemical, which is a combined chemical/mechanical process.  

The vast majority of chemical pulp production in Canada is bleached. Bleached chemical pulp can be used to manufacture specialized paper and paperboard products such as fine paper, tissue, or linerboard. Unbleached chemical pulp is used mainly for wrapping paper and packaging. 

Some of the wood fibre that is traditionally used for making pulp and paper can also be redirected to other innovative uses. See the “Future of pulp and paper production” section for more details.`,
                    type: 'text'
                },
                {
                    caption:
                        'Source: Gettyimages, Dorling Kindersley (2021), [Diagram of a paper making factory](https://www.gettyimages.ca/detail/illustration/diagram-of-a-paper-making-factory-royalty-free-illustration/75488548?adppopup=true)',
                    src: '/f6f7baf4-cccb-4521-a037-b4691b0f0d49/assets/en/Chemical_process_EN.png',
                    type: 'image',
                    altText:
                        'Step 1. Preparation of raw material: wood fibres are separated using chemical and high temperature treatments. Step 2. Pulping and bleaching. Step 3. Pulp is finished in the paper machine. Step 4. Shipping of the final product.'
                }
            ]
        },
        {
            title: 'Manufacturing subprocesses',
            panel: [
                {
                    title: 'Manufacturing subprocesses',
                    content: `In addition to pulping processes, pulp and paper mills also release pollutants from subprocesses designed to recover chemicals and energy. 
For example, residual bark from the preparation of the raw material is burned in power boilers for energy recovery purposes. Energy is recovered as steam, electricity or both, and is used to meet on-site energy demands and/or sold to the power grid.

Another example is the chemical recovery process operated at kraft pulp mills where inorganic cooking chemicals [sodium hydroxide (NaOH) and sodium sulphide (Na<sub>2</sub>S) are recovered for reuse in pulping. This process generates large amounts of heat as a result of the burning of organic materials derived from the wood (black liquor) in recovery furnaces. This heat is therefore used to produce steam and/or electricity. 

Some pulp and paper industry facilities include a wastewater treatment system and a landfill for their waste material. Therefore, mill residuals such as wood ash from wood combustion in boilers, sludge from wastewater treatment operations, causticizing residuals from chemical recovery systems at kraft mills and wood residues can be reused, treated or disposed.`,
                    type: 'text'
                },
                {
                    src: '/f6f7baf4-cccb-4521-a037-b4691b0f0d49/assets/en/Subprocess.jpg',
                    altText: 'A stock image of a pulp and paper facility, aerial view.',
                    type: 'image'
                }
            ]
        },
        {
            title: 'Which pollutants are reported to the NPRI by pulp and paper facilities?',
            panel: [
                {
                    title: 'Which pollutants are reported to the NPRI by pulp and paper facilities?',
                    content: `Pollutants reported in the highest quantities to the NPRI by this sector are released to air, water and land. Key pollutants are as follows:
- Criteria air contaminants (CAC);
- Ammonia (NH<sub>3</sub>)
- Sulphur dioxide (SO<sub>2</sub>)
- Nitrogen oxides (NO<sub>x</sub>)
- Volatile organic compounds (VOCs)
- Particulate matter (PM) 
- Carbon monoxide (CO)
- Total reduced sulphur (TRS)
- Phosphorus (P)
- Nitrates (NO<sub>3</sub>-)`,
                    type: 'text'
                },
                {
                    title:
                        'Total releases and disposals of pulp and paper facilities that reported to the NPRI from 2010 to 2019',
                    config:
                        '/f6f7baf4-cccb-4521-a037-b4691b0f0d49/ramp-config/en/total_releases_and_disposals_of_pnp_2010-2019.json',
                    type: 'map',
                    timeSlider: {
                        range: [2010, 2019],
                        start: [2019, 2019],
                        attribute: 'Report_Year_Année_de_déclaration'
                    }
                }
            ]
        },
        {
            title: 'Criteria air contaminants',
            panel: [
                {
                    title: 'Criteria air contaminants',
                    content: `Nearly 86% of substances emitted by the industry are [Criteria air contaminants](https://www.canada.ca/en/environment-climate-change/services/air-pollution/pollutants/common-contaminants.html) (CACs) released directly into the air. A significant portion of the CACs reported by the paper industry are associated with combustion sources (e.g., power boilers, recovery furnaces and lime kilns).`,
                    type: 'text'
                },
                {
                    title:
                        'Total criteria air contaminants released by pulp and paper facilities that reported to the NPRI from 2010 to 2019',
                    config:
                        '/f6f7baf4-cccb-4521-a037-b4691b0f0d49/ramp-config/en/total_criteria_air_contaminants_of_pnp_2010-2019.json',
                    type: 'map',
                    timeSlider: {
                        range: [2010, 2019],
                        start: [2019, 2019],
                        attribute: 'Report_Year_Année_de_déclaration'
                    }
                }
            ]
        },
        {
            title: 'CACs proportion',
            panel: [
                {
                    title: 'CACs proportion',
                    content: `CACs can, at certain concentration levels in the ambient air, cause environmental harm and contribute to health problems such as respiratory and cardiovascular problems. For example, nitrous oxide (NOx) and sulfur oxides (SOx) are precursors to acid rain and NOx and volatile organic compounds (VOCs) contribute to the formation of ground-level ozone, which is the main ingredient in smog. 
 
NPRI data show that annual carbon monoxide (CO) releases from the pulp and paper industry have increased by approximately 7,000 tonnes since 2010. CO releases are generally associated with poor combustion linked to operational issues, such as poor mixing of air and fuel, insufficient residence time, temperature, multiple plant start ups, outdated equipment and total excess air. It should be noted that combustion efficiencies also depend on fuel type and combustor technology.

Methanol is the main volatile organic compound (VOC) released to the air by the paper industry, accounting for over 55% of VOCs reported. Recovered methanol can be used for combustion on site or sold.

In pulp and paper mills, ammonia (NH<sub>3</sub>) is generally neither manufactured nor processed at concentrations above 1%. However, trace quantities of this substance could be manufactured as a by-product and released directly into the air. Typically, ammonia is mostly present in relatively small quantities in treated mill effluents as a result of adding nitrogen-containing supplemental nutrients to paper mill water treatment systems.`,
                    type: 'text'
                },
                {
                    type: 'chart',
                    charts: [
                        {
                            src: '/f6f7baf4-cccb-4521-a037-b4691b0f0d49/charts/en/CAC_en.csv',

                            options: {
                                xAxisLabel: '',
                                yAxisLabel: '',
                                title:
                                    'Proportion of criteria air contaminants released by pulp and paper facilities that reported to the NPRI in 2019',
                                subtitle: '',
                                type: 'pie'
                            }
                        }
                    ]
                }
            ]
        },
        {
            title: 'Total reduced sulphur',
            panel: [
                {
                    title: 'Total reduced sulphur',
                    content: `Total reduced sulphur (TRS) is a mixture of sulphur compounds that emit an odour similar to that of rotten eggs or boiled cabbage.

For reporting under the NPRI, carbon disulphide and carbonyl sulphide are included in the definition of TRS. However, the Forest product sector expressed their TRS release in terms of hydrogen sulphide (H<sub>2</sub>S), and is restricted to the following substances: 
- Hydrogen sulphide (H<sub>2</sub>S)
- Dimethyl sulphide (C<sub>2</sub>H<sub>6</sub>S)
- Dimethyl disulphide (C<sub>2</sub>H<sub>6</sub>S<sub>2</sub>) 
- Methyl mercaptan (CH<sub>4</sub>S)
                    
TRS is generally neither manufactured nor processed in high quantity. However, trace quantities of this substance could be manufactured as a by-product (mainly from the use of sodium sulphide in kraft cooking) and be directly released to the atmosphere. Much of the TRS formed is controlled and burned in combustion units (e.g., recovery furnaces, lime kilns or thermal oxidizers). TRS releases from the pulp and paper industry account for 50% of the total releases of this substance reported to the NPRI.`,
                    type: 'text'
                },
                {
                    title:
                        'Total reduced sulphur released by pulp and paper facilities that reported to the NPRI from 2010 to 2019',
                    config:
                        '/f6f7baf4-cccb-4521-a037-b4691b0f0d49/ramp-config/en/total_reduced_sulphur_of_pnp_2010-2019.json',
                    type: 'map',
                    timeSlider: {
                        range: [2010, 2019],
                        start: [2019, 2019],
                        attribute: 'Report_Year_Année_de_déclaration'
                    }
                }
            ]
        } /*
        {
            title: 'TRS releases',
            panel: [
                {
                    title: 'TRS releases',
                    content: `The **graph below** illustrates the trend in TRS releases since 2010, together with the number of reporting facilities.
                    
| Year | TRS releases (tonnes) | Number of reporting facilities |
| ---- | --------------------- | ------------------------------ |
| 2010 | 2761                  | 131                            |
| 2011 | 2983                  | 117                            |
| 2012 | 2599                  | 111                            |
| 2013 | 2719                  | 108                            |
| 2014 | 2425                  | 108                            |
| 2015 | 2497                  | 104                            |
| 2016 | 2612                  | 101                            |
| 2017 | 2497                  | 96                             |
| 2018 | 2587                  | 100                            |
| 2019 | 2793                  | 101                            |`,
                    type: 'text'
                },
                {
                    src: '/f6f7baf4-cccb-4521-a037-b4691b0f0d49/assets/en/trs_en.png',
                    type: 'image',
                    altText: 'A graphical pie chart representation of the data table in the previous slide.'
                }
            ]
        },*/,
        {
            title: 'Phosphorus and nitrates',
            panel: [
                {
                    title: 'Phosphorus and nitrates',
                    content: `Phosphorus (P) and nitrates (NO<sub>3</sub>-) are released mainly to water. Nitrogen and phosphorus are present in raw materials and are also added as nutrients to wastewater treatment systems. Excess bioavailable forms of phosphorus and nitrogen in aquatic environments can cause eutrophication, i.e., accumulation of nutrients resulting in excessive growth of aquatic plants. This phenomenon accelerates the aging of lakes, as it reduces the amount of oxygen available to support the survival of living organisms, impacting [water quality](https://maps.canada.ca/journal/content-en.html?lang=en&appid=8a338d0681824636998c355671ce4f88&appidalt=361e6a263e6547a0b2e0e36f04546599).

In 2019, phosphorus accounted for 22% of industry effluents, while nitrates accounted for 27%. According to NPRI data, the trend in phosphorus and nitrate releases from paper mills has remained constant over the years.

Pulp and paper facilities are required to conduct [Environmental Effects Monitoring](https://www.canada.ca/en/environment-climate-change/services/managing-pollution/environmental-effects-monitoring/pulp-paper-technical-guidance.html) (EEM) studies to measure the effect of final effluent releases on receiving water environments.`,
                    type: 'text'
                },
                {
                    title:
                        'Phosphorus and nitrates released by pulp and paper facilities that reported to the NPRI from 2010 to 2019',
                    config:
                        '/f6f7baf4-cccb-4521-a037-b4691b0f0d49/ramp-config/en/phosphorus_and_nitrates_of_pnp_2010-2019.json',
                    type: 'map',
                    timeSlider: {
                        range: [2010, 2019],
                        start: [2019, 2019],
                        attribute: 'Report_Year_Année_de_déclaration'
                    }
                }
            ]
        },
        {
            title: 'Recycling, treatment and disposal',
            panel: [
                {
                    title: 'Recycling, treatment and disposal',
                    content: `NPRI reporting facilities provide information on activities undertaken to recover reported substances. Pollutant recovery prevents direct releases to the environment, through on-site or off-site disposal, recycling or treatment.`,
                    type: 'text'
                },
                {
                    title:
                        'Total disposals and transfers of pulp and paper facilities that reported to the NPRI from 2010 to 2019',
                    config:
                        '/f6f7baf4-cccb-4521-a037-b4691b0f0d49/ramp-config/en/total_disposals_and_transfers_of_pnp_2010-2019.json',
                    type: 'map',
                    timeSlider: {
                        range: [2010, 2019],
                        start: [2019, 2019],
                        attribute: 'Report_Year_Année_de_déclaration'
                    }
                }
            ]
        },
        {
            title: 'Recycling, treatment and disposal proportion',
            panel: [
                {
                    title: 'Recycling, treatment and disposal proportion',
                    content: `As shown in the chart *on the right*, of all pollutants reported by paper mills, most of it is  directly released into the environment. NPRI data indicate that 4% of substances are recovered. Of these, manganese and phosphorus are the two substances recovered in the greatest quantities (over 2,000 tonnes). The data show that metals are most often subjected to recovery processes. For example, at least 88% of reported aluminium, lead and zinc quantities are disposed of, treated or recycled.`,
                    type: 'text'
                },
                {
                    src: '/f6f7baf4-cccb-4521-a037-b4691b0f0d49/assets/en/substances_recovered_en.png',
                    altText:
                        'Pie chart 1. Proportion of substances directly released in the environment and recovered substances: Proportion of substances directly released in the environment- 96%, Proportion of recovered substances- 4%; Pie chart 2. Proportion of substances subject to a recovery process: Off-site disposal- 36%, On-site disposal- 44%, Recycling- 17%, Treatment- 3%.',
                    type: 'image'
                }
            ]
        },
        {
            title: 'Regulatory measures',
            panel: [
                {
                    title: 'Regulatory measures',
                    content: `Standards, acts, regulations and voluntary measures are in place to control the release of pollutants to air, water and land from pulp and paper mills. For example:
- The federal [Pulp and Paper Effluent Regulations](https://laws-lois.justice.gc.ca/eng/regulations/SOR-92-269/page-1.html) (PPER) govern the discharge of substances to watercourses with the goal of protecting fish habitat. 
- The [Canadian Ambient Air Quality Standards](https://www.canada.ca/en/environment-climate-change/services/environmental-indicators/air-quality.html) (CAAQS) set national air quality objectives and base level industrial emission requirements (BLIERs). These standards are not restrictive—that is, there is no penalty or fine or if they are exceeded. However, they make it possible to target problem areas as well as develop action plans and new federal and provincial regulations to limit the release of pollutants. 
- The [Multi-Sector Air Pollutants Regulations](https://laws-lois.justice.gc.ca/eng/regulations/SOR-2016-151/page-1.html) (MSAPR) set out the national limits on industrial emissions, including NO<sub>x</sub>.
- The [Code of practice for the management of air emissions from pulp and paper mills](https://www.canada.ca/en/environment-climate-change/services/canadian-environmental-protection-act-registry/guidelines-objectives-codes-practice/issuance-statement-pulp-paper-facilities/code-practice-pulp-paper-facilities.html) describes the operational activities of pulp and paper mills and the environmental concerns those activities raise in relation to air emissions of sulphur dioxide (SO<sub>2</sub>) and total particulate matter (TPM). The Code sets out emission limits and recommended practices to mitigate these concerns.
- The [Guidelines for the reduction of dyes released from pulp and paper mills](https://www.canada.ca/en/environment-climate-change/services/canadian-environmental-protection-act-registry/publications/guidelines-reduction-dyes-released-mills.html) prescribe certain limits that should not be exceeded and outline applicable best practices for the listed dyes, with the aim of minimizing the amount of dyes released into the final effluent.
- The [Pulp and Paper Mill Effluent Chlorinated Dioxins and Furans Regulations](https://laws-lois.justice.gc.ca/eng/regulations/SOR-92-267/page-1.html) limit the release of chlorinated dioxins and furans in effluents.
- The [Pulp and Paper Mill Defoamer and Wood Chip Regulations](https://laws-lois.justice.gc.ca/eng/regulations/SOR-92-268/page-1.html) govern the manufacture, import, offering for sale, sale and use of defoamers at pulp and paper mills using chlorine bleaching processes and of wood chips containing polychlorinated polyphenols at pulp and paper mills.`,
                    type: 'text'
                },
                {
                    src: '/f6f7baf4-cccb-4521-a037-b4691b0f0d49/assets/en/Regulations.jpg',
                    altText: 'A stock image of a pulp and paper facility.',
                    type: 'image'
                }
            ]
        },
        {
            title: 'Pollution prevention',
            panel: [
                {
                    title: 'Pollution prevention',
                    content: `To reduce pollution, some facilities have implemented a pollution prevention plan to encourage the use of environmental best practices. According to NPRI reports, pulp and paper facilities have increased implementation of best practices or training, leak and spill prevention measures, and modifications to equipment or manufacturing processes. Actions taken mainly target the following substances: 
- particulate matter;
- sulphur dioxide;
- ammonia; and
- volatile organic compounds.

Most facilities burn biomass residuals (e.g. bark, pulping liquor, sludge from effluent treatment) for energy recovery purposes. Some facilities also subscribe to certifications for their supply of wood, such as [Forest Stewardship Council](https://ca.fsc.org/en-ca) (FSC) or the [Sustainable Forest Initiative](https://www.forests.org/) (SFI) certifications. 
                    
The largest sources of particulate matter and gaseous compounds at pulp and paper mills are equipped with emission control devices and operate such that these emissions meet provincial regulations and permit requirements. Also, suspended and soluble organics in process wastewaters are controlled via on-site wastewater treatment systems, which use sedimentation and biological degradation to produce final effluent discharges that meet federal and provincial permits and regulations.

Learn more about [pollution prevention](https://www.canada.ca/en/environment-climate-change/services/pollution-prevention.html) and how Canadian facilities are doing their part to protect the environment.`,
                    type: 'text'
                },
                {
                    config: '/f6f7baf4-cccb-4521-a037-b4691b0f0d49/ramp-config/en/pollution_prevention_activities.json',
                    type: 'map'
                }
            ]
        },
        {
            title: 'Future of pulp and paper production',
            panel: [
                {
                    title: 'Future of pulp and paper production',
                    content: `Canada’s markets for books, newspapers, telephone books, flyers, and directories have shrunk as the internet and smartphones fundamentally alter the way people access information. The current situation in the industry has prompted efforts to achieve greater diversification by developing new technologies and creating innovative processes.

The continual progress in the industry has prompted a key shift in the pulp and paper industry: biotransformation, which involves the diversification of products made from wood or forest biomass. Investments continue to be made to diversify products and transition from traditional products to new [bioproducts](https://www.nrcan.gc.ca/our-natural-resources/forests-forestry/forest-industry-trade/forest-bioeconomy-bioenergy-bioproducts/13315?_ga=2.227497498.649404953.1617160478-1132748700.1617160478). 
                    
For example, by breaking down wood into its central components – cellulose, hemi-cellulose, and lignin – it is possible to produce a range of substances that can be used to manufacture a variety of bioproducts including biofuels, biochemicals, bioplastics, cellulose filaments and nanomaterial from wood. These new processes can be integrated into existing pulp and paper mills or as stand-alone facilities. Also, lignin can be extracted from chemical pulping liquors to be sold on the market. Soap, a by-product of concentrated black liquor from kraft pulp mills, can be processed into crude tall oil and sold. Other uses of mill waste materials are possible for pulp and paper facilities, such as the recovering boiler ashes for application on agricultural land, and the manufacturing of bioproducts like xylitol, nanocrystalline cellulose and ethanol.
                    
To achieve this diversification of products, the industry relies on certain funding programs, such as the [Forest Innovation Program](https://www.nrcan.gc.ca/science-and-data/funding-partnerships/funding-opportunities/forest-sector-funding-programs/forest-innovation-program/13137?_ga=2.266829321.649404953.1617160478-1132748700.1617160478) (FIP) and the [Investments in Forest Industry Transformation](https://www.nrcan.gc.ca/science-data/funding-partnerships/funding-opportunities/forest-sector-funding-programs/investments-forest-industry-transformation-ifit/13139?_ga=2.194928298.649404953.1617160478-1132748700.1617160478) (IFIT) program. 
                    
The [2019 State of Canada’s Forests report](https://www.nrcan.gc.ca/our-natural-resources/forests-forestry/state-canadas-forests-report/16496?_ga=2.262577419.649404953.1617160478-1132748700.1617160478), published by Natural Resources Canada, provides an overview of the social, economic and environmental condition of forests and forestry in Canada.`,
                    type: 'text'
                },
                {
                    src: '/f6f7baf4-cccb-4521-a037-b4691b0f0d49/assets/en/Futur.jpg',
                    altText: 'An image of a large pile of lumber.',
                    type: 'image'
                }
            ]
        },
        {
            title: 'Pollution in your neighbourhood',
            panel: [
                {
                    title: 'Pollution in your neighbourhood',
                    content: `To learn more, you can find out which facilities and pollutants are in your community by consulting [NPRI maps and datasets](https://www.canada.ca/en/environment-climate-change/services/national-pollutant-release-inventory/tools-resources-data/exploredata.html). All NPRI data are public and free of charge.`,
                    type: 'text'
                },
                {
                    title: 'NPRI data',
                    content: `We have packaged the data in different ways for different uses. You can search the entire database, download subsets of data, or view the data on maps.
        
### Search NPRI data

[Search our database](https://pollution-waste.canada.ca/national-release-inventory/archives/index.cfm?lang=En) for 1994 to 2017 pollutant releases in your area, as well as information about the facility(s).

### Download NPRI data

These easy-to-use files let you dig deeper into the data in a variety of ways

- [Single year tables](https://open.canada.ca/data/en/dataset/1fb7d8d4-7713-4ec6-b957-4a882a84fed3),
  - annual tables of our most popular data fields. One table for each of the last 3 years
- [Five year summaries](https://open.canada.ca/data/en/dataset/ea0dc8ae-d93c-4e24-9f61-946f1736a26f)
  - summaries by air, water or land releases grouped by province, industry type or substance
- [All years datasets](https://open.canada.ca/data/en/dataset/40e01423-7728-429c-ac9d-2954385ccdfb)
  - annual data since 1994 on pollutant quantities, comments and geolocations
- [Complete reported datasets](https://open.canada.ca/data/en/dataset/06022cc0-a31e-4b4c-850d-d4dccda5f3ac)
  - comprehensive datasets going back to 1994`,
                    type: 'text'
                }
            ]
        }
    ],
    contextLink:
        'https://www.canada.ca/en/environment-climate-change/services/national-pollutant-release-inventory/tools-resources-data/exploredata.html',
    contextLabel: 'Explore National Pollutant Release Inventory data',
    lang: 'en',
    dateModified: '2022-02-25'
};

export default config;
