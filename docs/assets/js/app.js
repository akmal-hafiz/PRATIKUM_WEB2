const { createApp } = Vue;
const apiUrl = ' https://4168-36-50-112-76-subdomain.ngrok.io/ci4/public';

createApp({
  data() {
    return {
      artikel: [],
      formData: {
        id: null,
        judul: '',
        isi: '',
        status: 0
      },
      showForm: false,
      formTitle: 'Tambah Data',
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      axios.get(`${apiUrl}/post`)
        .then(response => {
          this.artikel = response.data.artikel;
        })
        .catch(error => console.log(error));
    },
    statusText(status) {
      return status == 1 ? 'Publish' : 'Draft';
    },
    tambah() {
      this.formTitle = 'Tambah Data';
      this.formData = {
        id: null,
        judul: '',
        isi: '',
        status: 0
      };
      this.showForm = true;
    },
    edit(data) {
      this.formTitle = 'Ubah Data';
      this.formData = { ...data };
      this.showForm = true;
    },
    hapus(index, id) {
      if (confirm('Yakin ingin menghapus?')) {
        axios.delete(`${apiUrl}/post/${id}`)
          .then(() => {
            this.artikel.splice(index, 1);
          })
          .catch(error => console.log(error));
      }
    },
    saveData() {
      if (this.formData.id) {
        // UPDATE
        axios.put(`${apiUrl}/post/${this.formData.id}`, this.formData)
          .then(() => {
            this.loadData();
            this.showForm = false;
          })
          .catch(error => console.log(error));
      } else {
        // CREATE
        axios.post(`${apiUrl}/post`, this.formData)
          .then(() => {
            this.loadData();
            this.showForm = false;
          })
          .catch(error => console.log(error));
      }
    }
  }
}).mount('#app');
