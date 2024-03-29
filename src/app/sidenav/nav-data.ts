import { INavbarData } from "./helper";

export const navbarData:INavbarData[] = [
    {
        routeLink: "dashboard",
        icon: "fa fa-home",
        label: 'Dashboard'
    },
    {
        routeLink: "products",
        icon: "fa fa-book-open",
        label: 'Forms',
        items: [
            {
                routeLink: 'products/level1.1',
                label: 'Level-1.1',
                items: [
                    {
                        routeLink: 'products/level2.1',
                        label: 'Level 2.1',
                    },
                    {
                        routeLink: 'products/level2.2',
                        label: 'Level 2.2',
                        items: [
                            {
                                routeLink: 'products/level-3.1',
                                label: 'Level-3.1'
                            },
                            {
                                routeLink: 'products/level-3.2',
                                label: 'Level-3.2'
                            }
                        ]
                    }
                ]
            },
            {
                routeLink: 'products/level1.2',
                label: 'Level 1.2',
            }
        ]
    },
    {
        routeLink: "statistics",
        icon: "fa fa-chart-bar",
        label: 'Statistics'
    },
    {
        routeLink: "coupens",
        icon: "fa fa-tags",
        label: 'Buttons',
        items: [
            {
                routeLink: 'coupens/create',
                label: 'Create'
            },
            {
                routeLink: 'coupens/list',
                label: 'List Coupens'
            }
        ]
    },
    {
        routeLink: "pages",
        icon: "fa fa-file",
        label: 'Pages'
    },
    {
        routeLink: "media",
        icon: "fa fa-camera",
        label: 'Media'
    },
    {
        routeLink: "settings",
        icon: "fa fa-cog",
        label: 'Settings',
        expanded:false,
        items:[
            {
                routeLink:'settings/profile',
                label:'Profile'
            },
            {
                routeLink:'settings/customize',
                label:'Customize'
            }
        ]
    }
];