package com.cs304.netflix.mapper;

import com.cs304.netflix.model.Admin;
import com.cs304.netflix.model.Profile;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface ProfileInfoMapper {

    @Select("SELECT * \n" +
            "  FROM Profile \n" +
            " WHERE adminId = #{adminId}\n" +
            "   AND id = #{id}")
    Profile getProfileByAdminIdAndId(Profile profile);

    @Select("SELECT * \n" +
            "  FROM (SELECT * FROM Profile \n" +
            "         WHERE adminId = #{adminId}\n" +
            "         ORDER BY id DESC)\n" +
            "  WHERE ROWNUM <= 1")
    Profile getLastProfile(Profile profile);

    @Update("UPDATE Profile \n" +
            "   SET age = #{age}, name = #{name} \n" +
            " WHERE adminId = #{adminId} \n" +
            "   AND id = #{id}\n")
    boolean updateProfile(Profile profile);

    @Insert("INSERT INTO Profile ( id, name, adminId, age )\n" +
            "VALUES ((nvl(( SELECT max(id) \n" +
            "               FROM Profile \n" +
            "               WHERE adminId = #{adminId}), 0) + 1)\n" +
            "         , #{name}\n" +
            "         , #{adminId}\n" +
            "         , #{age})")
    boolean createProfile(Profile profile);

    @Delete("DELETE FROM Profile\n" +
            " WHERE id = #{id}, adminId = #{adminId}")
    boolean deleteProfile(Profile profile);

    @Select("SELECT * \n" +
            "  FROM Profile \n" +
            " WHERE adminId = #{id}")
    List<Profile> getProfiles(Admin admin);
}