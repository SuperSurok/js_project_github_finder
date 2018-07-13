class Github {
    constructor() {
        this.client_id = 'd4e18385c12743a2b4b8';
        this.client_secret = 'dde3f21a7aba9ef193eacaac8a415102e9b6fee1';
        this.repos_count = 5;
        this.repos_sort = 'created: asc'
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&clinet_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_id=${this.client_id}&clinet_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        return {
            profile,
            repos
        }
    }
}