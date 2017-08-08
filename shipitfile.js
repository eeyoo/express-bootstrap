/**
 * Created by feilin on 2017/8/8.
 */
module.exports = function (shipit) {
    require('shipit-deploy')(shipit);

    shipit.initConfig({
        default: {
            workspace: '/tmp/workspace',
            deployTo: '/tmp/deploy',
            repositoryUrl: 'https://github.com/eeyoo/express-bootstrap.git',
            ignores: ['.git', 'node_modules'],
            rsync: ['--del'],
            keepReleases: 2,
            key: '',
            shallowClone: true
        },
        staging: {
            servers: '192.168.3.39'
        }
    });

    shipit.task('pwd', function () {
        return shipit.remote('pwd');
    });
};