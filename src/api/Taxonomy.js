import Base from './Base';

class Taxonomy extends Base {
    /**
     * API endpoint to ask ai a question
     *
     * @return {Promise}
     */
    async get() {
        const url =
            'https://api.app-tgauntlett.monolith-devpod.apps-global.gcp001.dev.box.net/2.0/metadata_taxonomies/namespace_123/geography/nodes';
        const id = 'file_10464733522';

        try {
            return this.xhr.get({
                url,
                id,
            });
        } catch (e) {
            console.log(e);
        }
    }
}

export default Taxonomy;
