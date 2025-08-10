import { ref, computed, readonly } from 'vue'
import apiService from '@/services/api'

export function usePosts() {
  console.log('🎯 usePosts composable initialized');
  
  const posts = ref([])
  const loading = ref(false)
  const error = ref(null)
  const currentPost = ref(null)

  // Computed properties
  const postsCount = computed(() => {
    const count = posts.value.length;
    console.log('📊 Posts count updated:', count);
    return count;
  })
  
  const latestPosts = computed(() => {
    const latest = posts.value.slice(0, 3);
    console.log('🆕 Latest posts computed:', latest);
    return latest;
  })

  // Methods
  const fetchPosts = async () => {
    console.log('🔄 Starting fetchPosts...');
    loading.value = true
    error.value = null
    
    try {
      const data = await apiService.getPosts()
      console.log('✅ fetchPosts successful, data received:', data);
      posts.value = data
      console.log('💾 Posts state updated, total posts:', posts.value.length);
    } catch (err) {
      console.error('❌ fetchPosts failed:', err);
      error.value = err.message
    } finally {
      loading.value = false
      console.log('🏁 fetchPosts completed, loading:', loading.value);
    }
  }

  const fetchPost = async (id) => {
    console.log('🔄 Starting fetchPost for ID:', id);
    loading.value = true
    error.value = null
    
    try {
      const data = await apiService.getPost(id)
      console.log('✅ fetchPost successful, data received:', data);
      currentPost.value = data
      return data
    } catch (err) {
      console.error('❌ fetchPost failed:', err);
      error.value = err.message
      throw err
    } finally {
      loading.value = false
      console.log('🏁 fetchPost completed, loading:', loading.value);
    }
  }

  const fetchPostsByCategory = async (categoryId) => {
    console.log('🔄 Starting fetchPostsByCategory for category ID:', categoryId);
    loading.value = true
    error.value = null
    
    try {
      const data = await apiService.getPostsByCategory(categoryId)
      console.log('✅ fetchPostsByCategory successful, data received:', data);
      posts.value = data
      return data
    } catch (err) {
      console.error('❌ fetchPostsByCategory failed:', err);
      error.value = err.message
      throw err
    } finally {
      loading.value = false
      console.log('🏁 fetchPostsByCategory completed, loading:', loading.value);
    }
  }

  const fetchLatestPosts = async (limit = 3) => {
    console.log('🔄 Starting fetchLatestPosts with limit:', limit);
    loading.value = true
    error.value = null
    
    try {
      const data = await apiService.getLatestPosts(limit)
      console.log('✅ fetchLatestPosts successful, data received:', data);
      return data
    } catch (err) {
      console.error('❌ fetchLatestPosts failed:', err);
      error.value = err.message
      throw err
    } finally {
      loading.value = false
      console.log('🏁 fetchLatestPosts completed, loading:', loading.value);
    }
  }

  const createPost = async (postData) => {
    console.log('🔄 Starting createPost with data:', postData);
    loading.value = true
    error.value = null
    
    try {
      const data = await apiService.createPost(postData)
      console.log('✅ createPost successful, new post:', data);
      posts.value.unshift(data)
      console.log('💾 Posts state updated, total posts:', posts.value.length);
      return data
    } catch (err) {
      console.error('❌ createPost failed:', err);
      error.value = err.message
      throw err
    } finally {
      loading.value = false
      console.log('🏁 createPost completed, loading:', loading.value);
    }
  }

  const updatePost = async (id, postData) => {
    console.log('🔄 Starting updatePost for ID:', id, 'with data:', postData);
    loading.value = true
    error.value = null
    
    try {
      const data = await apiService.updatePost(id, postData)
      console.log('✅ updatePost successful, updated post:', data);
      const index = posts.value.findIndex(post => post._id === id)
      if (index !== -1) {
        posts.value[index] = data
        console.log('💾 Post updated in posts array at index:', index);
      }
      if (currentPost.value && currentPost.value._id === id) {
        currentPost.value = data
        console.log('💾 Current post updated');
      }
      return data
    } catch (err) {
      console.error('❌ updatePost failed:', err);
      error.value = err.message
      throw err
    } finally {
      loading.value = false
      console.log('🏁 updatePost completed, loading:', loading.value);
    }
  }

  const deletePost = async (id) => {
    console.log('🔄 Starting deletePost for ID:', id);
    loading.value = true
    error.value = null
    
    try {
      await apiService.deletePost(id)
      console.log('✅ deletePost successful');
      posts.value = posts.value.filter(post => post._id !== id)
      console.log('💾 Post removed from posts array, remaining posts:', posts.value.length);
      if (currentPost.value && currentPost.value._id === id) {
        currentPost.value = null
        console.log('💾 Current post cleared');
      }
    } catch (err) {
      console.error('❌ deletePost failed:', err);
      error.value = err.message
      throw err
    } finally {
      loading.value = false
      console.log('🏁 deletePost completed, loading:', loading.value);
    }
  }

  const searchPosts = (query) => {
    console.log('🔍 Searching posts with query:', query);
    if (!query.trim()) {
      console.log('🔍 Empty query, returning all posts');
      return posts.value
    }
    
    const searchTerm = query.toLowerCase()
    const filtered = posts.value.filter(post => 
      post.title?.toLowerCase().includes(searchTerm) ||
      post.content?.toLowerCase().includes(searchTerm) ||
      post.author?.toLowerCase().includes(searchTerm)
    )
    console.log('🔍 Search results:', filtered.length, 'posts found');
    return filtered
  }

  console.log('🎯 usePosts composable setup complete');

  return {
    // State
    posts: readonly(posts),
    loading: readonly(loading),
    error: readonly(error),
    currentPost: readonly(currentPost),
    
    // Computed
    postsCount,
    latestPosts,
    
    // Methods
    fetchPosts,
    fetchPost,
    fetchPostsByCategory,
    fetchLatestPosts,
    createPost,
    updatePost,
    deletePost,
    searchPosts
  }
} 