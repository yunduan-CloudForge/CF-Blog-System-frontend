// 快速登录脚本 - 在浏览器控制台中运行

// 1. 登录并保存认证信息
async function quickLogin() {
  try {
    console.log('正在登录管理员账户...');
    
    const response = await fetch('http://localhost:3001/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: 'admin@blog.com',
        password: 'admin123'
      })
    });
    
    const data = await response.json();
    
    if (data.success) {
      console.log('登录成功！');
      console.log('用户:', data.data.user);
      
      // 保存到localStorage（模拟前端认证状态）
      const authData = {
        state: {
          token: data.data.token,
          user: data.data.user,
          isAuthenticated: true
        },
        version: 0
      };
      
      localStorage.setItem('auth-storage', JSON.stringify(authData));
      console.log('认证信息已保存到本地存储');
      
      // 刷新页面以应用认证状态
      console.log('正在刷新页面...');
      window.location.reload();
      
    } else {
      console.error('登录失败:', data.message);
    }
  } catch (error) {
    console.error('登录请求失败:', error);
  }
}

// 2. 检查当前认证状态
function checkAuthStatus() {
  const authStorage = localStorage.getItem('auth-storage');
  if (authStorage) {
    try {
      const authData = JSON.parse(authStorage);
      console.log('当前认证状态:', authData.state);
      return authData.state;
    } catch (e) {
      console.error('解析认证数据失败:', e);
      return null;
    }
  } else {
    console.log('未找到认证数据');
    return null;
  }
}

// 3. 测试日志API
async function testLogsAPI() {
  const authState = checkAuthStatus();
  if (!authState || !authState.token) {
    console.error('请先登录');
    return;
  }
  
  try {
    console.log('正在测试日志API...');
    
    const response = await fetch('http://localhost:3001/api/admin/logs', {
      headers: {
        'Authorization': `Bearer ${authState.token}`
      }
    });
    
    const data = await response.json();
    
    if (response.ok) {
      console.log('日志API调用成功！');
      console.log('日志数据:', data);
    } else {
      console.error('日志API调用失败:', data);
    }
  } catch (error) {
    console.error('日志API请求失败:', error);
  }
}

// 使用说明
console.log('快速登录脚本已加载！');
console.log('使用方法:');
console.log('1. quickLogin() - 登录管理员账户');
console.log('2. checkAuthStatus() - 检查认证状态');
console.log('3. testLogsAPI() - 测试日志API');

// 自动检查当前状态
checkAuthStatus();