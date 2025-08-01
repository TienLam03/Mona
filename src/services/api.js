const API_BASE_URL = 'http://localhost:3000';

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
    console.log('🚀 ApiService initialized with baseURL:', this.baseURL);
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    console.log('📡 Making API request:', {
      url,
      method: options.method || 'GET',
      body: options.body ? JSON.parse(options.body) : undefined
    });

    try {
      const response = await fetch(url, config);
      
      console.log('📥 API Response:', {
        status: response.status,
        statusText: response.statusText,
        url: response.url
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('✅ API Response Data:', data);
      return data;
    } catch (error) {
      console.error('❌ API request failed:', {
        error: error.message,
        url,
        method: options.method || 'GET'
      });
      throw error;
    }
  }

  // Posts API
  async getPosts() {
    console.log('📋 Fetching all posts...');
    return this.request('/posts');
  }

  async getPost(id) {
    console.log('📄 Fetching post with ID:', id);
    return this.request(`/posts/${id}`);
  }

  async getPostsByCategory(categoryId) {
    console.log('📂 Fetching posts by category ID:', categoryId);
    return this.request(`/posts/category/${categoryId}`);
  }

  async getLatestPosts(limit = 3) {
    console.log('🆕 Fetching latest posts, limit:', limit);
    return this.request(`/posts/latest/${limit}`);
  }

  async createPost(postData) {
    console.log('➕ Creating new post:', postData);
    return this.request('/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
    });
  }

  async updatePost(id, postData) {
    console.log('✏️ Updating post with ID:', id, 'Data:', postData);
    return this.request(`/posts/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(postData),
    });
  }

  async deletePost(id) {
    console.log('🗑️ Deleting post with ID:', id);
    return this.request(`/posts/${id}`, {
      method: 'DELETE',
    });
  }

  // Categories API
  async getCategories() {
    console.log('📁 Fetching all categories...');
    return this.request('/post-categories');
  }

  async getCategory(id) {
    console.log('📂 Fetching category with ID:', id);
    return this.request(`/post-categories/${id}`);
  }

  async createCategory(categoryData) {
    console.log('➕ Creating new category:', categoryData);
    return this.request('/post-categories', {
      method: 'POST',
      body: JSON.stringify(categoryData),
    });
  }

  async updateCategory(id, categoryData) {
    console.log('✏️ Updating category with ID:', id, 'Data:', categoryData);
    return this.request(`/post-categories/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(categoryData),
    });
  }

  async deleteCategory(id) {
    console.log('🗑️ Deleting category with ID:', id);
    return this.request(`/post-categories/${id}`, {
      method: 'DELETE',
    });
  }

  // Comments API
  async getComments(postId) {
    console.log('💬 Fetching comments for post ID:', postId);
    return this.request(`/post-comments?postId=${postId}`);
  }

  async createComment(commentData) {
    console.log('➕ Creating new comment:', commentData);
    return this.request('/post-comments', {
      method: 'POST',
      body: JSON.stringify(commentData),
    });
  }

  async updateComment(id, commentData) {
    console.log('✏️ Updating comment with ID:', id, 'Data:', commentData);
    return this.request(`/post-comments/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(commentData),
    });
  }

  async deleteComment(id) {
    console.log('🗑️ Deleting comment with ID:', id);
    return this.request(`/post-comments/${id}`, {
      method: 'DELETE',
    });
  }

  // Users API
  async getUsers() {
    console.log('👥 Fetching all users...');
    return this.request('/users');
  }

  async getUser(id) {
    console.log('👤 Fetching user with ID:', id);
    return this.request(`/users/${id}`);
  }

  async createUser(userData) {
    console.log('➕ Creating new user:', userData);
    return this.request('/users', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  async updateUser(id, userData) {
    console.log('✏️ Updating user with ID:', id, 'Data:', userData);
    return this.request(`/users/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(userData),
    });
  }

  async deleteUser(id) {
    console.log('🗑️ Deleting user with ID:', id);
    return this.request(`/users/${id}`, {
      method: 'DELETE',
    });
  }
}

export default new ApiService(); 