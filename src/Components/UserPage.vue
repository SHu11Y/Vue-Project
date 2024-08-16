<template>
  <div class="container">
    <div class="sidebar">
      <!-- Navigation links here (if needed) -->
    </div>

    <div class="table-container">
      <h2>User Table</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in paginatedUsers" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>
              <button @click="likeUser(user.id)">Like</button>
              <button @click="editUser(user.id)">Edit</button>
              <button @click="deleteUser(user.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Pagination Controls -->
      <div class="pagination">
        <button @click="previousPage" :disabled="currentPage === 1">Previous</button>
        <span>Page {{ currentPage }} of {{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserTable',
  data() {
    return {
      users: [
        { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
        { id: 3, name: 'Michael Brown', email: 'michael.brown@example.com' },
        { id: 4, name: 'Emily Davis', email: 'emily.davis@example.com' },
        { id: 5, name: 'James Wilson', email: 'james.wilson@example.com' },
      ],
      currentPage: 1,
      pageSize: 3 
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.users.length / this.pageSize);
    },
    paginatedUsers() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      return this.users.slice(start, end);
    }
  },
  methods: {
    likeUser(userId) {
      alert(`Liked user with ID: ${userId}`);
    },
    editUser(userId) {
      alert(`Edit user with ID: ${userId}`);
    },
    deleteUser(userId) {
      this.users = this.users.filter(user => user.id !== userId);
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: flex-start;
  padding: 20px;
}

.sidebar {
  width: 20%;
  padding: 10px;
  background-color: #f4f4f4;
}

.table-container {
  width: 75%;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
}

th {
  background-color: #f4f4f4;
}

td button {
  margin-right: 5px;
  padding: 5px 10px;
  cursor: pointer;
}

.pagination {
  margin-top: 20px;
  text-align: center;
}

.pagination button {
  padding: 10px;
  margin: 0 5px;
  border: 1px solid #ddd;
  background-color: #f4f4f4;
  cursor: pointer;
}

.pagination button:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.pagination span {
  margin: 0 10px;
}
</style>
