'use strict';

module.exports = function (project) {
    return {
        name: project.find('.item-title a').text(),
        dates: (function (dates) {
            var dd = dates.map(function(idx) {
                if (typeof idx === 'number') {
                    return dates[idx].innerHTML.trim();
                } else {
                    return undefined;
                }
            });
            var current = !dd[1] || ~dd[1].toLowerCase().indexOf('present') ? true : false;
            return {
                start: dd[0] ? new Date(dd[0]).toJSON() : undefined,
                end: dd[1] && !current ? new Date(dd[1]).toJSON() : undefined,
                current: current
            };
        })(project.find('> span.projects-date time')),
        description: project.find('.description').html(),
        teamCount: project.find('.contributors .contributor').length,
        projectlink: project.find('.item-title a[href]').attr('href')
    };
};
