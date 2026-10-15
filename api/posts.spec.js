const { test, expect } = require('@playwright/test');

test.describe('JSONPlaceholder API Tests', () => {
  test('API-01 GET /posts mengembalikan 100 data', async ({ request }) => {
    const res = await request.get('/posts');
    expect(res.status()).toBe(200);
    expect(await res.json()).toHaveLength(100);
  });

  test('API-02 GET /posts/1 valid', async ({ request }) => {
    const res = await request.get('/posts/1');
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.id).toBe(1);
    expect(body.userId).toBe(1);
    expect(typeof body.title).toBe('string');
    expect(res.headers()['content-type']).toContain('application/json');
  });

  test('API-03 GET /posts/9999 tidak ditemukan (404)', async ({ request }) => {
    const res = await request.get('/posts/9999');
    expect(res.status()).toBe(404);
  });

  test('API-04 POST /posts membuat data (201)', async ({ request }) => {
    const res = await request.post('/posts', {
      data: { title: 'Test Post', body: 'Isi test', userId: 1 },
    });
    expect(res.status()).toBe(201);
    const body = await res.json();
    expect(body.title).toBe('Test Post');
    expect(body.id).toBeDefined();
  });

  test('API-05 PUT /posts/1 memperbarui data', async ({ request }) => {
    const res = await request.put('/posts/1', {
      data: { id: 1, title: 'Updated', body: 'Isi baru', userId: 1 },
    });
    expect(res.status()).toBe(200);
    expect((await res.json()).title).toBe('Updated');
  });

  test('API-06 PATCH /posts/1 memperbarui sebagian data', async ({ request }) => {
    const res = await request.patch('/posts/1', { data: { title: 'Patched' } });
    expect(res.status()).toBe(200);
    expect((await res.json()).title).toBe('Patched');
  });

  test('API-07 DELETE /posts/1 berhasil', async ({ request }) => {
    const res = await request.delete('/posts/1');
    expect(res.status()).toBe(200);
  });

  test('API-08 GET /posts?userId=1 memfilter data', async ({ request }) => {
    const res = await request.get('/posts', { params: { userId: 1 } });
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.length).toBeGreaterThan(0);
    for (const post of body) expect(post.userId).toBe(1);
  });

  test('API-09 GET /posts/1/comments mengembalikan komentar', async ({ request }) => {
    const res = await request.get('/posts/1/comments');
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body[0].postId).toBe(1);
    expect(body[0].email).toContain('@');
  });

    test('API-10 response time < 3000 ms', async ({ request }) => {
    await request.get('/posts/1'); // pemanasan koneksi
    const start = Date.now();
    const res = await request.get('/posts/1');
    expect(res.status()).toBe(200);
    expect(Date.now() - start).toBeLessThan(3000);
  });
});
