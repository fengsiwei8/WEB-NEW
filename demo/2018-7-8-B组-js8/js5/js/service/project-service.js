angular.module('myApp')
    //上传文件
    .factory('uploadService', function (pathProject) {
        return {
            uploadFile: function (FileUploader, alias) {
                var param = {
                    url: pathProject.upload_url()
                };
                if (alias) {
                    angular.extend(param, {
                        alias: alias
                    });
                }
                return new FileUploader(param);
            }
        }
    })
    // 信息管理
    .factory('ArticleManagementService', function ($http, pathProject) {
        return {
            //获取
            getArticleList: function (params) {
                return $http.get(pathProject.getArticlelist_url, {
                    params: params
                });
            },
            //新增
            addArticle: function (params) {
                return $http.post(pathProject.addArticle_url, params);
            },
            //删除
            delArticle: function (id) {
                return $http.delete(pathProject.delArticle_url(id));
            },
            //获取单个
            getArticle: function (id) {
                return $http.get(pathProject.getArticle_url(id));
            },
            //编辑
            editArticle: function (id, params) {
                return $http.put(pathProject.editArticle_url(id), params);
            },
            //修改article的上架/下架
            changeArticleStatus: function (id, status) {
                return $http.put(pathProject.changeArticleStatus_url(id, status));
            }
        }
    })
    