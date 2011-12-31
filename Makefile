.PHONY: gen deploy-site deploy-images deploy

gen:
	rm -rf prod_deploy
	hyde -v gen -r -d prod_deploy -c prod.yaml

deployimages:
	rsync -vr ~/panoimages/www/ slice.bedafamily.com:/home/jbeda/sites/bedafamily/www/panoimages

deploysite: gen
	rsync -vr prod_deploy/ slice.bedafamily.com:/home/jbeda/sites/bedafamily/www
