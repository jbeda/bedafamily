.PHONY: gen deploy-site deploy-images deploy

gen:
	rm -rf prod_deploy
	hyde -v gen -r -d prod_deploy -c prod.yaml

deploy-images:
	rsync -avi --stats ~/panoimages/www/ slice.bedafamily.com:/home/jbeda/sites/bedafamily/www/panoimages

deploy-site: gen
	rsync -avi --stats prod_deploy/ slice.bedafamily.com:/home/jbeda/sites/bedafamily/www

deploy: deploy-images deploy-site
